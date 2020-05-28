import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Cell, Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";
import Colors from '../constants/colors';

const LabeledTable = props => {
    const {labelRow, labelCol, data, topLeftCellLabel} = props;
    const tableMargin = 10;
    const labelWrapperWidth = 100;
    const dataWrapperWidth = Dimensions.get('window').width - labelWrapperWidth - 2 * tableMargin;
    const dataCellWidth = dataWrapperWidth / labelRow.length;
    const dataCellHeight = 30;

    return (
        <View style={{height: dataCellHeight * (labelCol.length + 1), margin: tableMargin}}>
            <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 0.5, borderColor: 'white'}}>
                <TableWrapper style={{width: labelWrapperWidth}}>
                    <Cell data={topLeftCellLabel} style={{height: dataCellHeight, backgroundColor: 'white'}}/>
                    <TableWrapper style={{flexDirection: 'row'}}>
                        <Col data={labelCol}
                             style={styles.head}
                             textStyle={styles.tableTextStyle}
                             heightArr={[dataCellHeight, dataCellHeight]}/>
                    </TableWrapper>
                </TableWrapper>

                <TableWrapper style={{width: dataWrapperWidth}}>
                    <Row data={labelRow} width={dataCellWidth} height={dataCellHeight} style={{backgroundColor: 'white'}} textStyle={{color: Colors.primary900}}/>
                    <Rows data={data} width={dataCellWidth} height={dataCellHeight}/>
                </TableWrapper>

            </Table>
        </View>

    );
};

const styles = StyleSheet.create({});

export default LabeledTable;