import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";

const Offer = () => {
  const width = Dimensions.get("window").width;

  return (
    <View className="relative mt-4">
      <Image
        source={require("@/assets/images/home/offer.png")}
        className="w-full"
        style={{ borderRadius: 24 }}
      />

      <View
        className="absolute top-1/2  left-6"
        style={{ transform: "translateY(-50%)" }}
      >
        <Text
          style={{ fontSize: 36 }}
          className="text-neutral-50 font-semibold"
        >
          20-50% off
        </Text>
        <Text style={{ fontSize: 24 }} className="text-neutral-50 font-medium">
          on all products
        </Text>
      </View>
    </View>
  );

  return (
    <View className="mt-4 relative">
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={4000}
        renderItem={({ index }) => (
          <View className="relative">
            <Image
              source={require("@/assets/images/home/offer.png")}
              className="w-full"
              style={{ borderRadius: 24 }}
            />

            <View
              className="absolute top-1/2  left-6"
              style={{ transform: "translateY(-50%)" }}
            >
              <Text
                style={{ fontSize: 36 }}
                className="text-neutral-50 font-semibold"
              >
                20-50% off
              </Text>
              <Text
                style={{ fontSize: 24 }}
                className="text-neutral-50 font-medium"
              >
                on all products
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );

  return (
    <View className="mt-4">
      <View className="relative">
        <Image
          source={require("@/assets/images/home/offer.png")}
          className="w-full"
          style={{ borderRadius: 24 }}
        />

        <View
          className="absolute top-1/2  left-6"
          style={{ transform: "translateY(-50%)" }}
        >
          <Text
            style={{ fontSize: 36 }}
            className="text-neutral-50 font-semibold"
          >
            20-50% off
          </Text>
          <Text
            style={{ fontSize: 24 }}
            className="text-neutral-50 font-medium"
          >
            on all products
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Offer;
