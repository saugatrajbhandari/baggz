import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, usePathname } from "expo-router";

export default function SearchInput() {
  const [search, setSearch] = useState<string>();
  const pathname = usePathname();

  const handleSearch = () => {
    router.push({ pathname: "/search", params: { q: search } });
  };

  useEffect(() => {
    console.log("dfa");
    setSearch(undefined);
  }, [pathname]);

  return (
    <View className="mt-4">
      <View className="relative">
        <TextInput
          value={search}
          onChangeText={(search) => setSearch(search)}
          onSubmitEditing={handleSearch}
          className="border text-xl rounded-xl py-4  pl-12"
          placeholder="Search Product"
          returnKeyType="search"
        />

        <FontAwesome
          size={22}
          color={"grey"}
          name="search"
          className="absolute top-1/2  -translate-y-1/2 left-4"
        />
      </View>
    </View>
  );
}
