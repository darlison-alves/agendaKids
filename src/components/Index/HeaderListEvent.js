import React from 'react'
import { FlatList, View, ScrollView } from 'react-native'

import { HeaderbodyList } from "./styles";
import Hr from './Hr';
import CardEvent from '../cards/card-event';
import { DayOfWeek, NameOfMonth, gethora } from '../../constants/Helpers';
import { Spinner, Text } from 'native-base';
import { TouchableOpacity,  } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';


export default class HeaderListEvent extends React.Component {

  constructor() {
    super()
  }

  static navigationOptions = {
    title: 'Tetb'
  }

  componentWillMount() {
    this.props.getListEvent()
  }

  renderItem = ({ item }) => {
    if (item.header) {

      const data = new Date(item.startAt)
      const semana = DayOfWeek[data.getDay()]
      const dia = data.getDate()
     
      return (
        <Hr text={`${semana}, ${dia} de ${item.title}`} />
      );
    } else if (!item.header) {

      const data = new Date(item.startAt)
      const semana = DayOfWeek[data.getDay()]
      const mes = NameOfMonth[data.getMonth()]
      const dia = data.getDate()
      const hora = gethora(data)

      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item, dia, hora, mes})} >
          <CardEvent
            title="Eventos"
            description={item.title}
            image={item.image}
            hora={hora}
            footerText={`${semana}, ${dia} de ${mes} às ${hora}h`}
          />
        </TouchableOpacity>
      );
    }
  }

  

  render() {
    const { listEvents, loading, getListEvent, metadata } = this.props
    
    console.log(metadata.page + 1)

    return (
      <HeaderbodyList>
        <FlatList
          data={listEvents}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <View style={{ height: 0, marginBottom: 100 }} >{ loading ? <Spinner color={Colors.purple} /> : null}</View>}
          onEndReached={() => getListEvent(metadata.page + 1)}
        />
        
      </HeaderbodyList>
    )
  }
}
