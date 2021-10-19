import React from 'react';
import { List } from 'react-native-paper';
import { COLORS } from '../constants';

function list(props) {
    return (
        <List.Section >
          <List.Subheader style={{backgroundColor:COLORS.primary, color:"#dce8fc"}}>Reward</List.Subheader>
          <List.Item title={props.first} left={() => <List.Icon color="#ffd700" icon="ticket" />} />
          <List.Item style={{backgroundColor:COLORS.primary}} title={props.second} left={() => <List.Icon color="#c0c0c0" icon="cheese" />}/>
          <List.Item title={props.third} left={() => <List.Icon color="#cd7f32" icon="bicycle" />}/>
          
        </List.Section>
    );
}


export default list;