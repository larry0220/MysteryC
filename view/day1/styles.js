import { StyleSheet } from 'react-native';

import Util from '../utils';

const styles = StyleSheet.create({
  watchContainer:{
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    marginTop: 60,
  },
  watchFaceContainer:{
    width: Util.size.width,
    paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
    backgroundColor: "#fff",
    borderBottomWidth: 1, borderBottomColor:"#ddd",
    height: 170,
  },
  sectionTime:{
    fontSize: 20,
    fontWeight:"100",
    paddingRight: 30,
    color: "#555",
    position:"absolute",
    left:Util.size.width-140,
    top:30
  },
  totalTime:{
    fontSize: Util.size.width === 375? 70:60,
    fontWeight: "100",
    color: "#222",
    paddingLeft:20
  },
  watchControlContainer:{
    width: Util.size.width,
    height: 100,
    flexDirection:"row",
    backgroundColor: '#f3f3f3',
    paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
  },
  btnStart:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStop:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnText:{
    fontSize:14,
    backgroundColor:"transparent",
    color:"#555"
  },
  recordList:{
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15,
  },
  recordItem:{
    height: 40,
    borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
    paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  recordItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  recordItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"right",
    paddingRight:20,
    color:"#222"
  },
});

export default styles;
