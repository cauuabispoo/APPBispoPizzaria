import React from "react";
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import css from "./cssProd"
import Rodape from '../../componente/Rodape';

export default function Detalhes() {
    return <>
        <ScrollView >
            <Rodape></Rodape>
            <View style={css.linha}>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza de Calabresa" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.5Cxd5vFN90NEVU6ri6ZI7QHaHa?rs=1&pid=ImgDetMain' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza de Mussarela" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.pA_-yx03ro9iby8pf7-ZOAHaHa?rs=1&pid=ImgDetMain' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
            </View>

            <View style={css.linha}>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza de Dois Queijos" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.QagKAbbW_hv96VwJu4FSSQHaE8?rs=1&pid=ImgDetMain' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza de Frango" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://s.cornershopapp.com/product-images/2160401.png?versionId=YmJ6reAFo0JUa5wuy1V.K.pKWtPfEQtV' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
            </View>

            <View style={css.linha}>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza Romeu e Julieta" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://www.redelevepizza.com.br/assets/imagens/pizzas/small/romeu-e-julieta.png' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <View style={css.produto}>
                    <Card>
                        <TouchableOpacity>
                            <Card.Title title="Pizza de Chocolate com Morango" subtitle="R$44,90" />
                            <Card.Cover source={{ uri: 'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/png-pizza-doce-morango-chocolate.png?fit=1123%2C422&ssl=1' }} />
                        </TouchableOpacity>
                    </Card>
                </View>
            </View>
        </ScrollView>
    </>
}