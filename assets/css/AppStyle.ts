import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  justifySpace: {
    justifyContent: 'space-between'
  },
  flewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'TitilliumWeb-Regular',
    marginLeft: 15,
  },
  header: {
    paddingTop: 20,
    borderColor: '#fff',
    marginHorizontal: 10,
  },
  flatListStyle: {
    width: '100%',
    marginTop: 14,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 9,
  },
  movieName: {
    fontSize: 13,
    fontWeight: '300', 
    color: '#BCBEC0',
    textAlign: 'left',
    fontFamily: 'TitilliumWeb-Light',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  searchImage: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    marginRight: 10,
    color: '#000'
  },
  closeIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10
  },
  movieItemView: {
    paddingHorizontal: 6,
    marginBottom: 32,
    width: '33.3%',
  },
  emptyListImage: {
    resizeMode: 'contain',
    height: 180,
    width: 250,
    marginBottom: 15,
  },
  emptyListView: {
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 15,
  },
  emptyListText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: '#BCBEC0',
    textAlign: 'center',
    fontFamily: 'TitilliumWeb-Regular',
  },
  linearGradient: {
    width: '100%',
    height: 35,
    position: 'absolute',
    zIndex: 9
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderIcon: {
    width: 150,
    height: 150
  },
});

export default AppStyle;