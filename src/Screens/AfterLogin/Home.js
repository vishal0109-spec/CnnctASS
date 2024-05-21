import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../Components/CustomButton';
import {
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  bell,
  deal,
  dealhome,
  dot,
  line,
  location,
  logo,
  logo2,
  qrCode,
  rent,
  share,
} from '../../Utils/img';

const Home = () => {
  return (
    <View style={{flex: 1 , backgroundColor:'#FFF'}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View
        style={{
          flexDirection: 'row',
          marginTop: hp(3),
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(5),
        }}>
        <Button
          icon={logo}
          title="entainance"
          btnStyle={{
            color: '#3A3B3D',
            fontWeight: '500',
            fontSize: hp(2.3),
            marginTop: hp(1.5),
          }}
          iconStyle={{width: wp(8), height: hp(4.5), tintcolor: '#FF4D4D'}}
          style={{flexDirection: 'row'}}
        />
        <Button icon={bell} iconStyle={{width: wp(6.4), height: hp(4.1)}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: hp(1.5),
          marginRight: wp(5),
        }}>
        <Text style={{color: '#000', fontWeight: '400', fontSize: hp(1.7)}}>
          SLIDE TO{' '}
        </Text>
        <Text style={{color: '#FF4848', fontWeight: '500', fontSize: hp(1.7)}}>
          ADD COMMERCIAL
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#2A2E35',
          height: hp(28),
          width: wp(90),
          marginLeft: wp(5),
          marginTop: hp(1.2),
          borderRadius: wp(3),
          borderColor: '#050505',
          borderWidth: 1,
          shadowColor: 'gray',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 20,
          shadowOffset: {
            width: 2,
            height: 4,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            marginTop: hp(2),
          }}>
          <Text
            style={{color: '#E9E9E9', marginTop: hp(0.5), fontSize: hp(1.5)}}>
            GAURAV SRIVASTAVA
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#E9E9E9', fontSize: hp(1.5)}}>SHARE</Text>
            <Button icon={share} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              height: hp(10),
              width: wp(45),
              backgroundColor: '#F2B930',
              marginTop: hp(4),
              borderTopRightRadius: wp(3),
              borderBottomRightRadius: wp(3),
            }}>
            <Button
              icon={logo2}
              iconStyle={{
                width: wp(10),
                height: hp(5),
                tintColor: '#FFF',
              }}
              title="entainance"
              style={{
                flexDirection: 'row',
                marginTop: hp(2),
                marginLeft: wp(7),
              }}
              btnStyle={{marginTop: hp(2), color: '#fff', fontSize: hp(2.2)}}
            />
          </View>
          <View
            style={{
              height: hp(14),
              width: wp(35),
              backgroundColor: '#FFFFFF',
              marginTop: hp(1.5),
              borderTopLeftRadius: wp(3),
              borderBottomLeftRadius: wp(3),
              alignItems: 'center',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: hp(1.5),
                fontWeight: '500',
                color: '#000',
              }}>
              id code - rtrgs9768
            </Text>
            <View
              style={{
                height: hp(10),
                marginRight: wp(4),
                width: wp(40),
                backgroundColor: '#000',
                borderTopLeftRadius: wp(3),
                borderBottomLeftRadius: wp(3),
                paddingHorizontal: wp(1),
                paddingTop: hp(1.8),
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: hp(1.4),
                  fontWeight: '400',
                  color: '#FFF',
                }}>
                aAdhaar - xxxx xxxx xx12
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: hp(1.4),
                  fontWeight: '400',
                  color: '#FFF',
                  marginTop: hp(1.5),
                }}>
                pan - xxxx xxxx xx29
              </Text>
            </View>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: hp(1.5),
                fontWeight: '500',
                color: '#000',
              }}>
              R score - 450
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', paddingLeft: wp(3)}}>
            <Button icon={qrCode} iconStyle={{width: wp(12), height: hp(6)}} />
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: hp(1.8),
                fontWeight: '600',
                color: '#E9E9E9',
                marginTop: hp(3),
                marginLeft: wp(4),
              }}>
              R score - 450
            </Text>
          </View>

          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: hp(1.6),
              fontWeight: '600',
              color: '#E9E9E9',
              marginTop: hp(3),
              marginRight: wp(3),
            }}>
            Residential tenant
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: hp(1.5),
          marginRight: wp(5),
        }}>
        <Text style={{color: '#000', fontWeight: '400', fontSize: hp(1.7)}}>
          COMPLETE YOUR{' '}
        </Text>
        <Text style={{color: '#FF4848', fontWeight: '500', fontSize: hp(1.7)}}>
          PROFILE
        </Text>
      </View>
      <View style={{marginLeft: wp(5)}}>
        <Button
          icon={logo}
          title="score"
          style={{flexDirection: 'row'}}
          btnStyle={{fontWeight: '500', fontSize: hp(2.5), marginTop: hp(1.2)}}
        />
      </View>
      <View style={{marginTop: hp(1), marginLeft: wp(5), marginRight: wp(5)}}>
        <View
          style={{
            backgroundColor: '#FFF',
            width: wp(90),
            shadowOpacity: 0.2,
            shadowColor: '#000000',
            shadowRadius: 3,
            elevation: 20,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            borderRadius: 10,
            height: hp(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp(4),
              marginLeft: wp(4),
              marginTop: hp(2),
            }}>
            <Text style={{fontWeight: '500', fontSize: hp(2)}}>Worst</Text>
            <Text style={{fontWeight: '500', fontSize: hp(2)}}>Excellent</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button icon={Rectangle1} />
            <Button icon={Rectangle2} />
            <Button icon={Rectangle3} />
            <Button icon={Rectangle4} />
          </View>
          <Button
            icon={Rectangle5}
            title="450"
            btnStyle={{
              marginTop: hp(-4.7),
              fontSize: hp(2.6),
              fontWeight: '600',
              color:'#000'
            }}
            style={{alignItems: 'center', marginTop: hp(-3)}}
            iconStyle={{height: hp(5), width: wp(18)}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(2),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              flexDirection: 'row',
              width: wp(43),
              shadowOpacity: 0.2,
              shadowColor: '#000000',
              shadowRadius: 3,
              elevation: 20,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              borderRadius: wp(3),
              height: hp(14),
              borderStyle: 'solid',
              borderColor: '#AFAFAF',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <View style={{marginLeft: wp(2)}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: '#000',
                  fontSize: hp(2.1),
                }}>
                rented{' '}
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: '#FF4D4D',
                  fontSize: hp(2.3),
                }}>
                property{' '}
              </Text>
            </View>

            <Button
              icon={rent}
              iconStyle={{width: wp(11), height: hp(7), marginLeft: wp(4)}}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#FFF',
              width: wp(43),
              shadowOpacity: 0.2,
              shadowColor: '#000000',
              shadowRadius: 3,
              elevation: 20,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              borderRadius: wp(3),
              height: hp(14),
              borderStyle: 'solid',
              borderColor: '#AFAFAF',
              borderWidth: 1,
            }}>
            <View style={{marginLeft: wp(2)}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: '#000',
                  fontSize: hp(2.1),
                }}>
                ongoing{' '}
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: '#FF4D4D',
                  fontSize: hp(2.3),
                }}>
                deals{' '}
              </Text>
            </View>
            <Button
              icon={deal}
              iconStyle={{
                width: wp(5),
                height: hp(3),
                marginTop: hp(3),
                marginLeft: wp(3),
              }}
            />
            <Button icon={dealhome} iconStyle={{width: wp(8), height: hp(5)}} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(15),
          borderWidth: 1,
          borderColor: '#9F9E9E',
          backgroundColor: '#FFF',
          marginTop: hp(1),
        }}>
        <Button
          icon={location}
          iconStyle={{
            height: hp(12),
            width: wp(18),
            marginLeft: wp(5),
            marginTop: hp(1),
          }}
        />
        <View style={{marginLeft: wp(3), marginTop: hp(1)}}>
          <Text
            style={{
              color: '#000',
              fontWeight: '400',
              fontSize: hp(1.8),
              textTransform: 'uppercase',
            }}>
            Deal
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: hp(2.4),
              textTransform: 'uppercase',
            }}>
            Manager
          </Text>
          <Button icon={line} iconStyle={{width: wp(26)}} />
          <Text
            style={{
              fontSize: hp(1.5),
              textTransform: 'uppercase',
              fontWeight: '400',
            }}>
            js dfjka djkf ajksd fisdai sdfia sdifiai.
          </Text>
          <View
            style={{
              marginTop: hp(2),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button icon={dot} iconStyle={{height: hp(2), width: wp(4)}} />
            <View
              style={{
                backgroundColor: '#393939',
                marginLeft: wp(5),
                width: wp(70),
                height: hp(3),
                borderTopLeftRadius: wp(5),
                borderBottomLeftRadius: wp(5),
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: '600',
                  fontSize: hp(1.5),
                  textTransform: 'uppercase',
                  marginLeft: wp(5),
                  marginTop: hp(0.5),
                }}>
                lease pending by landlord
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(2),
          justifyContent: 'space-between',
          paddingHorizontal: wp(5),
        }}>
        <View
          style={{
            backgroundColor: '#FFF',
            width: wp(43),
            shadowOpacity: 0.2,
            shadowColor: '#000000',
            shadowRadius: 3,
            elevation: 20,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            borderRadius: wp(3),
            height: hp(14),
            borderStyle: 'solid',
            borderColor: '#AFAFAF',
            borderWidth: 1,
          }}>
          <View style={{marginLeft: wp(5), marginTop: hp(1)}}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#FF4D4D',
                fontSize: hp(1.5),
              }}>
              Raise
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '500',
                color: '#000',
                fontSize: hp(2),
              }}>
              complains
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            width: wp(43),
            shadowOpacity: 0.2,
            shadowColor: '#000000',
            shadowRadius: 3,
            elevation: 20,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            borderRadius: wp(3),
            height: hp(14),
            borderStyle: 'solid',
            borderColor: '#AFAFAF',
            borderWidth: 1,
          }}>
          <View style={{marginLeft: wp(5), marginTop: hp(1)}}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#000',
                fontSize: hp(2),
              }}>
              generated
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  color: '#000',
                  fontSize: hp(2),
                }}>
                bill by
              </Text>
              <Button
                title="LANDLORD"
                style={{
                  marginLeft: wp(1),
                  justifyContent: 'center',
                  backgroundColor: '#FF4D4D',
                  borderRadius: wp(5),
                  width: wp(18),
                  padding: wp(1),
                }}
                btnStyle={{fontSize: hp(1.5), color: '#FFF', fontWeight: '600'}}
              />
            </View>
          </View>
        </View>
      </View>
        </ScrollView>
      
    </View>
  );
};

export default Home;
