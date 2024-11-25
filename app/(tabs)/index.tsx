import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/home/title";
import Products from "@/components/home/products";
import { ScrollView } from "react-native";
import Categories from "@/components/home/categories";
import Offer from "@/components/home/offer";
import SearchInput from "@/components/home/search-input";

export default function Tab() {
  return (
    <SafeAreaView className="flex-1 px-2">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Title />
        <SearchInput />
        <Categories />
        <Products />
        <Offer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
