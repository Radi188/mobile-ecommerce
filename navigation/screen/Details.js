import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, Button, SafeAreaView } from 'react-native'
import SearchBar from '../../components/SearchBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../../app/api/client'
import Loading from '../../shared/Loading';
import GlobalStyle from '../../GlobalStyle';


export default function DetailsScreen({ navigation, route }) {
    const [category, setCategory] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [categoryIndex, setCategoryindex] = useState(6);
    const [data, setData] = useState([]);
    const getCategory = async () => {
        await client.get('get_home_data')
            .then((result) => setCategory(result.data)).then(setTimeout((isLoading) => setLoading(false), 3000))
    }
    const getData = async () => {
        await client.get(`get_products/${categoryIndex}`)
            .then((res) => setData(res.data)).then(setTimeout((isLoading) => setLoading(false), 3000))
    }
    useEffect(() => {
        getData();
    }, [categoryIndex])
    useEffect(() => {
        getCategory();
    }, [])
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const CardProduct = ({ product }) => {
        if (isLoading) {
            return <View></View>
        } else {
            return <FlatList data={data.data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ProductDetails", product = { item })}>
                        <Image source={{ uri: path + item.thumbnail }} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 12, textAlign: 'center' }}>{item.product_title}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", product = { item })} >
                            <Text style={{ fontWeight: 'bold', fontSize: 12, padding: 10, textAlign: 'center', color: 'white' }} >Check detail</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
                numColumns={2}
                style={styles.containCard}
                showsVerticalScrollIndicator={false}
            />
        }
    }
    const CategoryList = () => {
        if (isLoading) {
            return <Loading />
        } else {
            return <FlatList data={category.categories}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} onPress={() => setCategoryindex(item.id)}>
                        <Text style={[styles.item, categoryIndex == item.id && styles.categorySelected]}>{item.category_name}</Text>
                    </TouchableOpacity>
                )}
                horizontal={true}
                style={{ marginVertical: 10 }}
                showsHorizontalScrollIndicator={false}
            />

        }
    }
    return (
        <SafeAreaView style={[styles.contain, GlobalStyle.droidSafeArea]}>
            <View style={styles.navbar}>
                <View>
                    <Image source={require('../../assets/Image/logo-black.png')} style={{ width: 200, height: 60 }} />
                </View>
                <View>
                    <Icon name="" style={{ width: 60, height: 60 }} size={30} />
                </View>
            </View>
            <View>
                <CategoryList />
            </View>
            <CardProduct />
        </SafeAreaView>
    )
}
const width = Dimensions.get('screen').width / 2 - 30;
const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
        width: '90%',
        paddingLeft: 10,
        margin: 5,
        justifyContent: 'space-between',
    },
    contain: {
        backgroundColor: '#fafafa',
    },
    item: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    categorySelected: {
        color: '#2F58D2',
        borderBottomWidth: 2,
        paddingBottom: 5,
        borderColor: '#2F58D2',
        height: 23,
    },
    button: {
        margin: 10,
        backgroundColor: '#007AFF',
        borderRadius: 10
    },
    card: {
        height: 250,
        backgroundColor: '#fff',
        width,
        borderRadius: 10,
        marginBottom: 20,
        paddingBottom: 15,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    containCard: {
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#2F58D2',
        borderRadius: 10,
        marginHorizontal: 20,
    }

})