import React from 'react'
import { FlatList, View } from 'react-native'

import { HeaderbodyList } from "./styles";
import Hr from './Hr';
import CardEvent from '../cards/card-event';
import { DayOfWeek, NameOfMonth, gethora } from '../../constants/Helpers';
import { Spinner, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      const hora = gethora(data)

      return (
        <Hr text={`${semana}, ${dia} de ${item.title}`} />
      );
    } else if (!item.header) {

      const data = new Date(item.startAt)
      const semana = DayOfWeek[data.getDay()]
      const month = NameOfMonth[data.getMonth()]
      const dia = data.getDate()
      const hora = gethora(data)

      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} >
          <CardEvent
            title="Eventos"
            description={item.title}
            image={item.image}
            hora={hora}
            footerText={`${semana}, ${dia} de ${month} às ${hora}h`}

          />
        </TouchableOpacity>
      );
    }
  }

  

  render() {
    const { listEvents } = this.props
    
    return (
      <HeaderbodyList>

        <FlatList
          data={listEvents}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <View style={{ height: 0, marginBottom: 100 }} ><Spinner /></View>}
          navigate={() => { this.props.navigation.navigate('Details') }}
        />

      </HeaderbodyList>
    )
  }
}
