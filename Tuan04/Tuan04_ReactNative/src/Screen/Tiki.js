import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Tiki = () => {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <View style = {styles.Product}> 
            <Image style = {styles.tikiLogo} source = {require('../../assets/book.png')} />
            <Text style = {styles.txtVoucher}>Mã giảm giá đã lưu</Text>
        </View>
        <View style = {styles.ProductDetail}> 
            <Text style = {styles.txtName}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style = {styles.txtName2}>Cung cấp bởi Tiki Trading</Text>
            <Text style = {styles.txtPrice}>141.800 đ</Text>
            <Text style = {styles.txtPrice2}>141.800 đ</Text>
            <View style ={styles.btnAmounts}>
                <TouchableOpacity style = {styles.btnAmount}
                                   onPress={() => {
									setTotal((prev) => {
										setAmount((prevAmount) => {
											if (prevAmount == 0) return 0;
											else return prevAmount - 1;
										});
										if (amount > 0) return prev - 148.8;
										else return 0;
									});
								}}
                                    >
                    <Text style = {styles.txtBtnAmount}>-</Text>
                </TouchableOpacity>
                <Text style = {styles.txtCount}>{amount}</Text>
                <TouchableOpacity style = {styles.btnAmount}
                                     onPress={()=>{
                                        setAmount(amount + 1);
                                        setTotal(total + 141.800);
                                    }}
                                    >
                    <Text style = {styles.txtBtnAmount}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style = {{color:'#134FEC', fontSize:12,fontWeight:'bold'}}>Xem tại đây</Text>
        </View>
      </View>
      <View style= {styles.detailVouchers} >
            <View style= {styles.detailVoucher}>
                <Image source = {require('../../assets/yellow_block.png')} />
                <Text style = {{color:'#011627', fontSize:18,fontWeight:'bold', marginLeft:12}}>Mã giảm giá</Text>
            </View>
            <View style = {styles.btnVouchers}>
                <TouchableOpacity style = {styles.btnVoucher}>
                    <Text style = {styles.txtBtnVoucher}>Áp dụng</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View style={{backgroundColor: '#C4C4C4',width:'100%',height:12,marginTop:24}}></View>
        <View style= {{flexDirection:'row', marginTop:12}}>
            <Text style={{fontSize:13,fontWeight:'bold',color:'#011627'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{fontSize:13,fontWeight:'bold',color:'#134FEC', marginLeft:4}}>Nhập tại đây?</Text>
        </View>
        <View style={{backgroundColor: '#C4C4C4',width:'100%',height:12,marginTop:24}}></View>
        <View style= {{flexDirection:'row', marginTop:12, justifyContent:'space-between',width:'80%'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#011627'}}>Tạm tính</Text>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#EE0D0D', marginLeft:4}}>{total.toFixed(3)}đ</Text>
        </View>
        <View style={{backgroundColor: '#C4C4C4',width:'100%',height:115,marginTop:24}}></View>
        <View style= {{flexDirection:'row', marginTop:12, justifyContent:'space-between',width:'80%'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#808080'}}>Thành Tiền</Text>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#EE0D0D', marginLeft:4}}>{total.toFixed(3)}đ</Text>
        </View>
        <View style= {styles.btnthanhToans}>
            <TouchableOpacity style = {styles.btnthanhToan} onPress={()=>{
                if(amount == 0) alert('Vui lòng chọn số lượng sản phẩm');
                else{
                    alert('Đặt hàng thành công');
                    setAmount(0);
                    setTotal(0);
                }
                
                                }}>
                <Text style = {styles.txtBtnthanToan}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Tiki

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent:'space-between',
        padding:20,
    },
    Product:{
        
    },
    tikiLogo:{

    },
    txtVoucher:{
        fontSize: 12,
		marginTop: 20,
		fontWeight: 'bold',
    },
    ProductDetail:{
        
    },
    txtName:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    txtName2:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical:12
    },
    txtPrice:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'#d9262a',
        marginBottom:12
    },
    txtPrice2:{
        fontSize: 12 ,
        fontWeight: 'bold',
        color:'#808080',
        textDecorationLine: 'line-through',
        marginBottom:12
    },
    btnAmounts:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 100,
        height: 30,
    },
    btnAmount:{
        width: 20,
		height: 20,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C4C4C4',
    },
    txtBtnAmount:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtCount:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    detailVouchers:{
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailVoucher:{
        paddingLeft: 10,
        borderColor: 'black',
		borderWidth: 1,
		width: 200,
		height: 40,
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 5,
    },
    btnVouchers:{

    },
    btnVoucher:{
        backgroundColor: '#0A5EB7',
		width: 100,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
    },
    txtBtnVoucher:{
        color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
    },
    btnthanhToans:{
        width: '90%',
        height:50,
        marginTop: 24,
    },
    btnthanhToan:{
        backgroundColor: '#E53935',
        width: '100%',
    },
    txtBtnthanToan:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    }

})