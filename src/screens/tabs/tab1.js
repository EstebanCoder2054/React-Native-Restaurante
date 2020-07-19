import React, { useState, useEffect, useRef, Fragment } from "react";
import { styles } from "../../styles/styles";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-anchor-carousel";

const tab1 = ({ navigation }) => {
  console.log("esto es lo que trae el objeto de navegación", navigation);

  const [background, setBackground] = useState({
    uri:
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg",
    name: "Remo espalda",
    // difficulty: ''
    stat: "cambiar esto xd",
    desc: "Esto se debe de cambiar por la descripción del ejercicio men",
  });

  const [gallery, setgallery] = useState([
    {
      image:
        "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg",
      title: "Remo espalda",
      released: "cambiar esto xd",
      desc: "Esto se debe de cambiar por la descripción del ejercicio men",
      key: "1",
    },
    {
      image:
        "https://www.capitalcoahuila.com.mx/wp-content/uploads/2019/09/Sweet-active-3.jpg",
      title: "Curls con barra",
      released: "cambiar esto xd",
      desc: "Esto se debe de cambiar por la descripción del ejercicio men",
      key: "2",
    },
    {
      image:
        "https://lh3.googleusercontent.com/proxy/rK-sslFyJuw75PTJ1bFDzkyD_KL8ez1XTqnAtjXuRYjKCpRoj1fyhC79ysrFo3UB5jCZmk96QmDAAhQ3NbGVCrJdjFm6ExWg00nV9hnsaztkMcBNusw9XOh9--tbdwRjTJbyyRu0_V_zC3YbUE8pQwWu6c9z5lQGtGLPFR8s0es",
      title: "Press pierna",
      released: "cambiar esto xd",
      desc: "Esto se debe de cambiar por la descripción del ejercicio men",
      key: "3",
    },
    {
      image:
        "https://cnet4.cbsistatic.com/img/mSdKK71X29nFhsLSencu7IwYlhQ=/1200x675/2019/11/12/e66cc0f3-c6b8-4f6e-9561-e23e08413ce1/gettyimages-1002863304.jpg",
      title: "Abdomen tabata",
      released: "cambiar esto xd",
      desc: "Esto se debe de cambiar por la descripción del ejercicio men",
      key: "4",
    },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name='bookmark'
            size={30}
            color='white'
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Fragment>
      <View style={styles.drawerSearchBarContainer}>
        <View style={[styles.menuContainer, { marginTop: 50 }]}>
          <Feather
            name='menu'
            size={28}
            color='#FF1654'
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <View style={styles.searchBoxContainer}>
          <TextInput
            placeholder='search exercises'
            placeholderTextColor='#666'
            style={styles.searchBox}
          />
          <Feather
            name='search'
            size={22}
            color='#FF1654'
            style={styles.searchBoxIcon}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.carouselContentContainer}>
          <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#fff" }}>
            <ImageBackground
              source={{ uri: background.uri }}
              style={styles.imageBg}
              blurRadius={10}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginVertical: 10,
                }}
              >
                Rutinas recomendadas para ti
              </Text>

              <View style={styles.carouselContainerView}>
                <Carousel
                  data={gallery}
                  renderItem={renderItem}
                  itemWidth={200}
                  containerWidth={width - 20}
                  separatorWidth={0}
                  ref={carouselRef}
                  isActiveOpacity={0.4}
                />
              </View>

              <View style={styles.exerciseInfoContainer}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.exerciseName}>{background.name}</Text>
                  <Text style={styles.exerciseStat}>{background.stat}</Text>
                </View>

                {/* ACÁ PODRÍA IR EL RAITING PROMEDIO - POR ESTRELLAS */}
                {/* 
                <TouchableOpacity style={styles.GoToDetailsIconContainer}>
                  <FontAwesome5 name='arrow-right' size={22} color='#02ad94'/>
                </TouchableOpacity> */}
              </View>

              <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                  {background.desc}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>


                


      </ScrollView>
    </Fragment>
  );
};

export default tab1;
