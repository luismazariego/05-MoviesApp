import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Cast } from "../interfaces/creditsInterface";
import { MovieFullDetails } from "../interfaces/movieInterface";
import currencyFormatter from "currency-formatter";
import { ActorItem } from "./ActorItem";

interface Props {
  movieFullDetails: MovieFullDetails;
  cast: Cast[];
}
export const MovieDetails = ({ cast, movieFullDetails }: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name='star-outline' size={16} color='gray' />
          <Text>{movieFullDetails.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFullDetails.genres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>
        {/* Overview */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Overview
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFullDetails.overview}</Text>
        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Budget
        </Text>
        <Text style={{ fontSize: 16 }}>
          {currencyFormatter.format(movieFullDetails.budget, {
            code: "USD",
          })}
        </Text>
      </View>
      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 85 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}>
          Cast
        </Text>
        {/* <ActorItem actor={cast[0]} /> */}
        <FlatList
          style={{marginTop: 10, height: 70}}
          data={cast}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ActorItem actor={item} />}
        />
      </View>
    </>
  );
};
