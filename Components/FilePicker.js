import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FilePicker = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('SELECTED FILE : ', res)
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        
        console.log('User canceled file picker');
      } else {
       
        console.log('Error picking file:', err);
      }
    }
  };

  return (
    <View>
      <Button title="Pick File" onPress={pickFile} />
      {selectedFile && <Text>{selectedFile.name}</Text>}
    </View>
  );
};

export default FilePicker;
