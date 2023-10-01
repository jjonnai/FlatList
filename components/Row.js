import React from "react";
import { Text } from "@react-native-material/core";

export default function Row({person}) {
    return ( 
        <Text>{person.lastname}, {person.firstname}</Text>
    )
}