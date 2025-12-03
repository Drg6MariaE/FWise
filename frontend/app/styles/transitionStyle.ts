import { StyleSheet } from 'react-native';

export const transitionStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 450,
    height: 450, 
    resizeMode: 'contain', 
    alignSelf: 'center',
  },
  wrap: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -20,
    color: '#333',
    left: 10,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
    paddingHorizontal: 15,
  },
  footerText: {
    textAlign: "center",
    fontSize: 16,
    color: "#757575",
    fontWeight: "400",
    marginTop: 250,
  },
});
