import { View, Text, StyleSheet, Alert, ScrollView, Button} from 'react-native';
/*
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
*/
import Ball from '../components/Ball';
import useAccelerometer from '../hooks/useAccelerometer';
/*
import { ThemedText } from '../components/themed-text';
*/
import { ThemedView } from '../components/themed-view';
/*
import * as MailComposer from 'expo-mail-composer';
import * as DocumentPicker from 'expo-document-picker';
*/
export default function Index() {

    const acceleration = useAccelerometer();
    /*
    const [location, setLocation] =
        useState<Location.LocationObject | null>(null);

    useEffect(() => {
        const getLocation = async () => {
        try {
            // 1. Pedir permiso para acceder a la ubicación
            const permission =
            await Location.requestForegroundPermissionsAsync();

            if (permission.status !== 'granted') {
            Alert.alert(
                'Permiso denegado',
                'Se necesita permiso para obtener la ubicación.'
            );
            return;
            }

            // 2. Obtener una ubicación aproximada
            const currentLocation =
            await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
            });

            // 3. Guardar la ubicación
            setLocation(currentLocation);

        } catch (error) {
            console.error(error);

            Alert.alert(
            'Error',
            'No se pudo obtener la ubicación.'
            );
        }
        };

    getLocation();
  }, []);
    
    const enviandCorreo = async () => {
    try {
      // 1. Confirmar si el servicio de correo está disponible
      const isAvailable = await MailComposer.isAvailableAsync();

      if (!isAvailable) {
        Alert.alert(
          'No disponible', 
          'El servicio de correo no está configurado en este dispositivo.'
        );
        return;
      }

      // 2. Abrir el selector de archivos
      const result = await DocumentPicker.getDocumentAsync({
        type: '',
        copyToCacheDirectory: true,
      });

      // 3. Validar si el usuario canceló
      if (result.canceled) {
        return;
      }

      // 4. Obtener la URI del documento seleccionado
      const archivoUri = result.assets[0].uri;

      // 5. Enviar correo con el adjunto
      await MailComposer.composeAsync({
        recipients: ['ejemplo@gmail.com'],
        subject: 'Documento adjunto',

        body: 'Hola, te adjunto el documento seleccionado.',
        attachments: [archivoUri],
      });
    } catch (error) {
      console.error('Error al procesar el correo:', error);
      Alert.alert('Error', 'Hubo un problema al adjuntar o enviar el correo.');
    }
  };
*/

    return (
    <ScrollView contentContainerStyle={styles.container}>

    <ThemedView style={styles.stepContainer}>
        {/*
        <ThemedText type="title">
            Punto 4: Send email
        </ThemedText>

        <ThemedText>
            Presiona el botón para seleccionar un archivo y enviarlo por correo.
        </ThemedText>

        <Button
            title="Enviar correo"
            onPress={enviandCorreo}
        />
        */}
        {/*
        <ThemedText type="title">
        Ubicación del teléfono
      </ThemedText>

      {location ? (
        <>
          <ThemedText>
            Latitud: {location.coords.latitude.toFixed(6)}
          </ThemedText>

          <ThemedText>
            Longitud: {location.coords.longitude.toFixed(6)}
          </ThemedText>

          <ThemedText>
            Precisión aproximada: {
              location.coords.accuracy?.toFixed(2)
            } metros
          </ThemedText>
        </>
      ) : (
        <ThemedText>
          Obteniendo ubicación...
        </ThemedText>
      )}
        */}

        <Text style={styles.title}>
            Pelota con acelerómetro
        </Text>

        <View style={styles.box}>
            <Ball
            x={acceleration.x * 100}
            y={acceleration.y * 100}
            />
        </View>

        <Text style={styles.data}>
            X: {acceleration.x.toFixed(2)}
        </Text>

        <Text style={styles.data}>
            Y: {acceleration.y.toFixed(2)}
        </Text>

        <Text style={styles.data}>
            Z: {acceleration.z.toFixed(2)}
        </Text>

    </ThemedView>

</ScrollView>    
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        paddingTop: 60,
        gap: 16,
    },

    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    box: {
        width: 300,
        height: 400,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    data: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    stepContainer: {
    gap: 16,
    },

});
