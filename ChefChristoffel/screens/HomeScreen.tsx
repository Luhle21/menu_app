import {Text, View, StyleSheet, Button, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import React,{useState} from 'react'
//imports the menu.json file so it can be detected and utilised
import menulist from '../menu.json';

export default function HomeScreen(){
    //emptay arrays that wiil store the entered data by the chef on the app
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [course, setCourse] = useState('');
    const [addedItems, setAddedItems] = useState([]);
    const [menuItemCount, setMenuItemCount] = useState(menulist.reduce((acc,menu) => acc + menu.options, 0));
    

    const handleSubmit = () => {
        //if statement identify if the course info has been correctly added it will add it into the menu and increase the item counter by 1
        if (dishName && description && price && course) {
            setAddedItems([...addedItems, { name: dishName, description, price, course}]);
            setMenuItemCount(menuItemCount + 1);
            setDishName('');
            setDescription('');
            setPrice('');
            setCourse('');
        
        }
    };


    return(
        <ScrollView>
          <View style={styles.parentView}>
           <Text style={styles.text}> Chef Christoffel</Text>
            <Text style={styles.count}>No. Menu items: {menulist.reduce((acc, menu) => acc + menu.options.length, 0) + addedItems.length}</Text>
          </View>
          {menulist.map((menu) =>(
            <View key={menu.course}>
                <Text style={styles.course}> {menu.course}</Text>
                {[...menu.options, ...addedItems.filter((item) => item.course === menu.course)].map((option) => (
                    <View style={styles.menuDisplayBox}  key={option.name}>
                        <Text style={styles.name}> {option.name}</Text>
                        <Text style={styles.info}>{option.description}</Text>
                        <Text style={styles.info}>R {option.price}</Text>
                    </View>
                
                ))}
            </View>
                
          ))}
          
          <View style={styles.addView}>
            <View>
          <Text style={styles.heading}>Add New Dish</Text>

          <TextInput
          style={styles.input}
          placeholder='Dish Name'
          placeholderTextColor='white'
          value={dishName}
          onChangeText={(text) => setDishName(text)}
          />

          <TextInput
          style={styles.input}
          placeholder='Description'
          placeholderTextColor='white'
          value={description}
          onChangeText={(text) => setDescription(text)}
          />

         <TextInput
          style={styles.input}
          placeholder='Price'
          placeholderTextColor='white'
          value={price}
          onChangeText={(text) => setPrice(text)}
          />

         <TextInput
          style={styles.input}
          placeholder='Course type'
          placeholderTextColor='white'
          value={course}
          onChangeText={(text) => setCourse(text)}
          />

          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button} >Add Dish</Text>
          </TouchableOpacity>
          
        </View>
        </View>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    parentView: {
      flexDirection: 'column', 
      textAlign:'center',
      color: 'white',
      fontFamily: "cochin",
      fontStyle:'italic',
      backgroundColor: '#8A0505',
    
    },

    addView:{
      marginTop: 10,
      flexDirection: 'column', 
      textAlign:'center',
      color: 'white',
      fontFamily: "cochin",
      fontStyle:'italic',
      backgroundColor: '#8A0505',
      borderRadius: 10,
      padding:10,


    },

    text:{
        color:'white',
        fontSize:30,
        fontFamily: "cochin",
        fontStyle:'italic',
        textAlign: 'center',
        marginTop: 20,
    },

    menuDisplayBox: {
     flex: 1,
     backgroundColor: '#8A0505',
     justifyContent:'center',
     width: 375,
     height:100,
     borderRadius: 10,

    },

    
    heading:{
        fontSize: 30,
        fontFamily: "cochin",
        fontStyle:'italic',
        textAlign: 'center',
        color:'white',    
    },


    count:{
        fontSize: 20,
        fontFamily: "cochin",
        fontStyle:'italic',
        color:'white',  
        textAlign: 'center',
    },


    course:{
        fontSize: 25,
        fontFamily: "cochin",
        fontStyle:'italic',
        color:'#8A0505',
    },

    name:{
        color:'white',  
        fontSize:20,  
        fontStyle:'italic',
        textAlign: 'center',
    },

    info:{
        color:'white', 
        fontStyle:'italic', 
        textAlign:'center',
        fontSize: 15, 
        padding:1  
    },

    input:{
        fontSize: 20,
        width: 300,
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'white',
        textAlign: 'center',

    },

    button:{
        marginBottom: 20,
        width: 100,
        textAlign:'center',
        color:'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'white',
        fontSize: 18,
    },
})