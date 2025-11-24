import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'mood'>('welcome');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState<string>('');

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>My Mood Map</Text>
      <Text style={styles.subtitle}>Track your emotional journey</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCurrentScreen('mood')}
      >
        <Text style={styles.buttonText}>Start Logging</Text>
      </TouchableOpacity>
    </View>
  );

  // Mood Screen Component
  const MoodScreen = () => {
    const moods = ['😊', '😐', '😢'];
    
    const saveMood = () => {
      if (selectedMood) {
        Alert.alert('Mood Saved!', `You're feeling: ${selectedMood}${note ? `\nNote: ${note}` : ''}`);
        // Reset and go back to welcome
        setSelectedMood(null);
        setNote('');
        setCurrentScreen('welcome');
      } else {
        Alert.alert('Select a mood', 'Please choose how you feel first');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>How are you feeling today?</Text>
        
        {/* Emoji Selection - MMM-101 */}
        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodButton,
                selectedMood === mood && styles.selectedMood
              ]}
              onPress={() => setSelectedMood(mood)}
            >
              <Text style={styles.moodText}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Optional Text Note - MMM-102 */}
        <View style={styles.noteContainer}>
          <Text style={styles.noteLabel}>Add a note (optional):</Text>
          <TextInput
            style={styles.textInput}
            placeholder="What's making you feel this way?"
            value={note}
            onChangeText={setNote}
            multiline
            maxLength={200}
          />
          <Text style={styles.charCount}>{note.length}/200 characters</Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={[
            styles.saveButton,
            !selectedMood && styles.saveButtonDisabled
          ]}
          onPress={saveMood}
          disabled={!selectedMood}
        >
          <Text style={styles.saveButtonText}>
            {selectedMood ? `Save ${selectedMood} Mood` : 'Select a Mood First'}
          </Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('welcome')}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'welcome' ? <WelcomeScreen /> : <MoodScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saveButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    maxWidth: 300,
  },
  saveButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  backButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: '#7f8c8d',
    fontSize: 16,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    width: '100%',
  },
  moodButton: {
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'white',
    elevation: 2,
  },
  selectedMood: {
    borderColor: '#3498db',
    backgroundColor: '#e3f2fd',
    transform: [{ scale: 1.1 }],
  },
  moodText: {
    fontSize: 40,
  },
  noteContainer: {
    width: '100%',
    marginBottom: 30,
    maxWidth: 300,
  },
  noteLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    minHeight: 100,
    textAlignVertical: 'top',
    elevation: 1,
  },
  charCount: {
    textAlign: 'right',
    color: '#95a5a6',
    fontSize: 12,
    marginTop: 5,
  },
});