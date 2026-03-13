import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.outerContainer}>
      {/* --- HIASAN DI PINGGIR-PINGGIR LAYAR --- */}
      <Text style={[styles.decorEmoji, { top: 40, left: 20 }]}>🦋</Text>
      <Text style={[styles.decorEmoji, { top: 50, right: 30 }]}>🌸</Text>
      <Text style={[styles.decorEmoji, { bottom: 100, left: 15 }]}>✨</Text>
      <Text style={[styles.decorEmoji, { bottom: 40, right: 25 }]}>🦋</Text>
      <Text style={[styles.decorEmoji, { top: height / 2, left: 10 }]}>🌸</Text>
      <Text style={[styles.decorEmoji, { top: height / 2.5, right: 10 }]}>💙</Text>

      <View style={styles.innerContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageBorderOut}>
            {/* PERBAIKAN DI SINI */}
            <Image 
              source={require('../../assets/images/mutiara.jpg')} 
              style={styles.profilePic} 
            />
          </View>
          <Text style={styles.floatingHeart}>💙</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.name}>Mutiara Revalina Br.Simanullang</Text>
          <View style={styles.nimBadge}>
            <Text style={styles.nimText}>NIM: 243303621256</Text>
          </View>
        </View>

        <View style={styles.bioCard}>
          <Text style={styles.quoteIcon}>“</Text>
          <Text style={styles.bioText}>
            Tidak ada di dunia ini yang benar-benar baik, maka baik-baiklah dengan dirimu sendiri.
          </Text>
          <Text style={styles.flowerBottom}>🌸🦋🌸</Text>
        </View>
      </View>
    </View>
  );
}

// ... styles tetap sama seperti sebelumnya
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E0F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#B3E5FC',
  },
  decorEmoji: {
    position: 'absolute',
    fontSize: 24,
    opacity: 0.8,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  imageBorderOut: {
    padding: 5,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#81D4FA',
    borderStyle: 'dashed',
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#fff',
  },
  floatingHeart: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    fontSize: 25,
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0277BD',
    textAlign: 'center',
    marginBottom: 8,
  },
  nimBadge: {
    backgroundColor: '#B3E5FC',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  nimText: {
    fontSize: 13,
    color: '#01579B',
    fontWeight: '600',
    letterSpacing: 1,
  },
  bioCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#81D4FA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  quoteIcon: {
    fontSize: 40,
    color: '#81D4FA',
    height: 30,
    fontWeight: 'bold',
  },
  bioText: {
    color: '#444',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 22,
    marginVertical: 10,
  },
  flowerBottom: {
    fontSize: 16,
    marginTop: 5,
  },
});