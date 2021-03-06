import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Cell, Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";
import Colors from '../constants/colors';

const LabeledTable = props => {
    const {labelRow, labelCol, data, topLeftCellLabel} = props;
    const tableMargin = 10;
    const width = props.width ||  Dimensions.get('window').width;

    const labelWrapperWidth = props.labelColWidth || width * 0.25;
    const dataWrapperWidth = width - labelWrapperWidth - 2 * tableMargin;
    const dataCellWidth = dataWrapperWidth / labelRow.length;
    const dataCellHeight = 30;
    const heightArr = labelCol.map(() => dataCellHeight); // just generate one height value many times
    return (
        <View style={{height: dataCellHeight * (labelCol.length + 1), margin: tableMargin, borderRadius: 4, overflow: 'hidden'}}>
            <Table style={{flexDirection: 'row'}} borderStyle={styles.tableBorderStyle}>
                <TableWrapper style={{width: labelWrapperWidth}}>
                    <Cell data={topLeftCellLabel} style={{...{height: dataCellHeight}, ...styles.labelColAndRow}} textStyle={styles.labelColAndRowText}/>
                    <TableWrapper style={{flexDirection: 'row'}}>
                        <Col data={labelCol}
                             style={styles.labelColAndRow}
                             textStyle={styles.labelColAndRowText}
                             heightArr={heightArr}/>
                    </TableWrapper>
                </TableWrapper>

                <TableWrapper style={{width: dataWrapperWidth}}>
                    <Row data={labelRow} width={dataCellWidth} height={dataCellHeight}
                         style={styles.labelColAndRow} textStyle={styles.labelColAndRowText}/>
                    <Rows data={data} width={dataCellWidth} style={styles.dataCell} textStyle={styles.dataCellText} height={dataCellHeight}/>
                </TableWrapper>

            </Table>
        </View>

    );
};

const styles = StyleSheet.create({
    tableBorderStyle: {
        borderWidth: 0.5,
        borderColor: Colors.primary900
    },
    labelColAndRow: {
        backgroundColor: Colors.gray100
    },
    labelColAndRowText: {
        color: Colors.primary900,
        textAlign: 'center',
        fontFamily: 'Avenir-Light'
    },
    dataCell: {
        backgroundColor: Colors.primary800
    },
    dataCellText: {
        color: Colors.primary100,
        textAlign: 'center',
        fontFamily: 'Avenir-Light'
    }

});

export default LabeledTable;