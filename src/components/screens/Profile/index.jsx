import { Text, SafeAreaView, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import ProfileSvg from "../../../../assets/svgs/profile.svg";
import LeftSvg from "../../../../assets/svgs/left.svg";
import { styles } from "./styles";
import IconWrapper from "../../common/IconWrapper";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Replace with your data fetching logic
    const fetchUserData = async () => {
      // Assuming you have a function to get user data
      // const data = await getUserData();
      const data = { name: "David", email: "David@gmail.com" }; // Mock data
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainerStyle}>
        <IconWrapper icon={<LeftSvg />} pressHandler={backHandler} />
        <Text style={styles.headingText}>Profile Info</Text>
        <ProfileSvg style={styles.imageStyle} />
        <View style={styles.nameContainer}>
          <Text style={styles.heading}>Name</Text>
          <Text style={styles.value}>{userData.name}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.heading}>Email</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
