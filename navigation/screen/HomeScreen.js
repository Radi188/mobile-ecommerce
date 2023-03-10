import * as React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, FlatList, TouchableOpacity, Linking } from 'react-native'
import LottieView from 'lottie-react-native'
import SearchBar from '../../components/SearchBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../shared/card';
import SliderCard from '../../shared/sliderCard';
import CardTrend from '../../shared/cardTrend';
import client from '../../app/api/client';
import GlobalStyle from '../../GlobalStyle';
import Loading from '../../shared/Loading';


export default function HomeScreen({ navigation }) {
    const [data, setData] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const path = 'https://admin.franceajalimentaire.com/assets/images/categories/'
    const pathPro = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const getHomeData = async () => {
        await client.get('get_home_data').then((res) => setData(res.data)).then(setTimeout((isLoading) => setLoading(false), 3000))
    }
    React.useEffect(() => {
        getHomeData();
    }, [])
    const CategoryList = ({ category }) => {
        if (isLoading) {
            return <Loading />
        } else {
            return <FlatList data={data.categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Product', category = { item })} >
                        <Card title={item.category_name} >
                            <Image source={{ uri: path + item.category_image }} style={{ resizeMode: 'contain', width: 60, height: 60, borderRadius: 10 }} />
                        </Card>
                    </TouchableOpacity>
                )}
                horizontal={true}
                style={styles.wrapCategoryCard}
                showsHorizontalScrollIndicator={false}
            />
        }
    }
    const BestSeller = ({ item }) => {
        if (isLoading) {
            return <View></View>
        } else {
            const bestsell = data.collections[0]
            return <TouchableOpacity style={styles.trending} onPress={() => navigation.navigate("BestSell", item = { bestsell })} >
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{bestsell.collection_name}</Text>
                <Text style={{ color: 'white' }}>Interested product</Text>
                <View style={styles.containImage}>
                    <CardTrend title={bestsell['collection_details'][0]['product']['product_title']}>
                        <Image source={{ uri: pathPro + bestsell['collection_details'][0]['product']['thumbnail'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                    </CardTrend>
                    <CardTrend title={bestsell['collection_details'][1]['product']['product_title']}>
                        <Image source={{ uri: pathPro + bestsell['collection_details'][1]['product']['thumbnail'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                    </CardTrend>
                </View>
            </TouchableOpacity>
        }
    }
    const Trending = ({ item }) => {
        if (isLoading) {
            return <View></View>
        } else {
            const bestsell = data.collections[1]
            return <TouchableOpacity style={styles.trending} onPress={() => navigation.navigate("Trending", item = { bestsell })}  >
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{bestsell.collection_name}</Text>
                <Text style={{ color: 'white' }}>Product trend now</Text>
                <View style={styles.containImage}>
                    <CardTrend title={bestsell['collection_details'][0]['product']['product_title']}>
                        <Image source={{ uri: pathPro + bestsell['collection_details'][0]['product']['thumbnail'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                    </CardTrend>
                    <CardTrend title={bestsell['collection_details'][1]['product']['product_title']}>
                        <Image source={{ uri: pathPro + bestsell['collection_details'][1]['product']['thumbnail'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                    </CardTrend>
                </View>
            </TouchableOpacity>
        }
    }
    const FeatureCategory = () => {
        if (isLoading) {
            return <View></View>
        } else {
            const flashsale = data.featured_category;
            return <View style={styles.flashSale}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Feature category</Text>
                <View style={styles.flashContain}>
                    <TouchableOpacity>
                        <CardTrend title={flashsale[0]['category_name']}>
                            <Image source={{ uri: path + flashsale[0]['category_image'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                        </CardTrend>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardTrend title={flashsale[1]['category_name']}>
                            <Image source={{ uri: path + flashsale[1]['category_image'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                        </CardTrend>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardTrend title={flashsale[2]['category_name']}>
                            <Image source={{ uri: path + flashsale[2]['category_image'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                        </CardTrend>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardTrend title={flashsale[3]['category_name']}>
                            <Image source={{ uri: path + flashsale[3]['category_image'] }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 10 }} />
                        </CardTrend>
                    </TouchableOpacity>

                </View>
            </View>
        }
    }
    const whatsappNo = '+85511308330';
    const whatsappMsg = 'Hello I Have a question about product!!!'
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <ScrollView style={styles.homeContain} showsVerticalScrollIndicator={false} >
                <View style={styles.navbar}>
                    <View>
                        <Image source={require('../../assets/Image/logo-black.png')} style={{ width: 200, height: 60 }} />
                    </View>
                    <TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`)}>
                        <Image source={require('../../assets/whatsapp.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.slider}>
                    <SliderCard />
                </View>
                <View>
                    <CategoryList />
                </View>
                <View style={styles.containSale}>
                    <BestSeller />
                    <Trending />
                </View>
                <View style={styles.flashSaleContain}>
                    <FeatureCategory />
                </View>
            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeContain: {
        backgroundColor: '#fafafa',
    },
    navbar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
        width: '95%',
        paddingLeft: 10,
        margin: 5,
        justifyContent: 'space-between',
    },
    containSale: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    bestSale: {
        padding: 10,
        height: 200,
        backgroundColor: '#fff',
        width: '47.5%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    trending: {
        padding: 10,
        height: 200,
        backgroundColor: '#2F58D2',
        width: '47.5%',
        justifyContent: 'center',
        borderRadius: 25,
    },
    containImage: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flashSale: {
        padding: 10,
        height: 200,
        backgroundColor: '#fff',
        width: '95%',
        justifyContent: 'center',
        borderRadius: 25,
        alignItems: 'center'
    },
    flashContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    flashSaleContain: {
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgb(0,0,0,0.3)',
        zIndex: 0,
        margin: 10,
        height: 200
    },
    wrapCategoryCard: {
        marginTop: -30,
        paddingTop: 15,
    }
})
