import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {

const presentCount = history.filter(item => item.status === "Present").length;
const absentCount = history.filter(item => item.status === "Absent").length;

const renderItem = ({ item }) => (
<View style={styles.item}>
<View>
<Text style={styles.course}>{item.course}</Text>
<Text style={styles.date}>{item.date}</Text>
</View>

<View style={styles.statusRow}>
<MaterialIcons
name={item.status === "Present" ? "check-circle" : "cancel"}
size={22}
color={item.status === "Present" ? "#2ecc71" : "#e74c3c"}
/>

<Text style={item.status === "Present" ? styles.present : styles.absent}>
{item.status}
</Text>
</View>
</View>
);

return (
<SafeAreaView style={styles.container}>
<ScrollView contentContainerStyle={styles.content}>

<Text style={styles.title}>Attendance App</Text>

<View style={styles.card}>
<View style={styles.icon}>
<MaterialIcons name="person" size={40} color="#555" />
</View>

<View>
<Text style={styles.name}>Vebriana Dela Rosanti</Text>
<Text style={styles.info}>NIM : 0320240080</Text>
<Text style={styles.info}>Class : Informatika-2A</Text>
</View>
</View>

<View style={styles.classCard}>
<Text style={styles.subtitle}>Today's Class</Text>
<Text style={styles.classText}>Mobile Programming</Text>
<Text style={styles.classText}>08.00 - 10.00</Text>
<Text style={styles.classText}>Lab 3</Text>

<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>CHECK IN</Text>
</TouchableOpacity>
</View>

<View style={styles.classCard}>
<Text style={styles.subtitle}>Upcoming Class</Text>
<Text style={styles.classText}>Database System</Text>
<Text style={styles.classText}>10.00 - 12.00</Text>
<Text style={styles.classText}>Lab 2</Text>
</View>

<View style={styles.summaryCard}>
<Text style={styles.subtitle}>Attendance Summary</Text>

<View style={styles.summaryRow}>
<View style={styles.summaryBox}>
<MaterialIcons name="check-circle" size={28} color="#2ecc71"/>
<Text style={styles.summaryNumber}>{presentCount}</Text>
<Text style={styles.summaryLabel}>Present</Text>
</View>

<View style={styles.summaryBox}>
<MaterialIcons name="cancel" size={28} color="#e74c3c"/>
<Text style={styles.summaryNumber}>{absentCount}</Text>
<Text style={styles.summaryLabel}>Absent</Text>
</View>
</View>

</View>

<Text style={styles.subtitle}>Attendance History</Text>

<FlatList
data={history}
keyExtractor={(item) => item.id.toString()}
renderItem={renderItem}
scrollEnabled={false}
/>

</ScrollView>
</SafeAreaView>
);
};

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f2f4f7"
},

content:{
padding:20,
paddingBottom:40
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:20
},

card:{
flexDirection:"row",
backgroundColor:"white",
padding:18,
borderRadius:12,
marginBottom:20,
alignItems:"center",
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:6,
elevation:3
},

icon:{
width:60,
height:60,
borderRadius:30,
backgroundColor:"#eee",
alignItems:"center",
justifyContent:"center",
marginRight:15
},

name:{
fontSize:18,
fontWeight:"bold"
},

info:{
color:"#555",
marginTop:2
},

classCard:{
backgroundColor:"white",
padding:18,
borderRadius:12,
marginBottom:20,
shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:6,
elevation:3
},

classText:{
marginTop:3,
color:"#555"
},

subtitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

button:{
marginTop:15,
backgroundColor:"#3498db",
padding:12,
borderRadius:8,
alignItems:"center"
},

buttonText:{
color:"white",
fontWeight:"bold"
},

summaryCard:{
backgroundColor:"white",
padding:18,
borderRadius:12,
marginBottom:20,
shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:6,
elevation:3
},

summaryRow:{
flexDirection:"row",
justifyContent:"space-around",
marginTop:10
},

summaryBox:{
alignItems:"center"
},

summaryNumber:{
fontSize:22,
fontWeight:"bold",
marginTop:5
},

summaryLabel:{
color:"#555"
},

item:{
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"white",
padding:15,
borderRadius:10,
marginBottom:10,
shadowColor:"#000",
shadowOpacity:0.05,
shadowRadius:4,
elevation:2
},

statusRow:{
flexDirection:"row",
alignItems:"center"
},

course:{
fontSize:16,
fontWeight:"bold"
},

date:{
fontSize:13,
color:"#777"
},

present:{
color:"#2ecc71",
marginLeft:6,
fontWeight:"bold"
},

absent:{
color:"#e74c3c",
marginLeft:6,
fontWeight:"bold"
}

});

const history = [
{ id: 1, course: "Mobile Programming", date: "2026-03-01", status: "Present" },
{ id: 2, course: "Database System", date: "2026-03-02", status: "Present" },
{ id: 3, course: "Operating Systems", date: "2026-03-03", status: "Absent" },
{ id: 4, course: "Computer Network", date: "2026-03-04", status: "Present" },
{ id: 5, course: "Artificial Intelligence", date: "2026-03-05", status: "Present" },
{ id: 6, course: "Data Mining", date: "2026-03-06", status: "Absent" },
{ id: 7, course: "Software Engineering", date: "2026-03-07", status: "Present" },
{ id: 8, course: "Computer Graphics", date: "2026-03-08", status: "Present" },
{ id: 9, course: "Cyber Security", date: "2026-03-09", status: "Absent" },
{ id: 10, course: "Web Programming", date: "2026-03-10", status: "Present" },
{ id: 11, course: "Mobile Programming", date: "2026-03-11", status: "Present" },
{ id: 12, course: "Database System", date: "2026-03-12", status: "Present" },
{ id: 13, course: "Operating Systems", date: "2026-03-13", status: "Absent" },
{ id: 14, course: "Computer Network", date: "2026-03-14", status: "Present" },
{ id: 15, course: "Artificial Intelligence", date: "2026-03-15", status: "Present" },
{ id: 16, course: "Data Mining", date: "2026-03-16", status: "Absent" },
{ id: 17, course: "Software Engineering", date: "2026-03-17", status: "Present" },
{ id: 18, course: "Computer Graphics", date: "2026-03-18", status: "Present" },
{ id: 19, course: "Cyber Security", date: "2026-03-19", status: "Absent" },
{ id: 20, course: "Web Programming", date: "2026-03-20", status: "Present" },
{ id: 21, course: "Machine Learning", date: "2026-03-21", status: "Present" },
{ id: 22, course: "Cloud Computing", date: "2026-03-22", status: "Absent" }
];

export default Home;