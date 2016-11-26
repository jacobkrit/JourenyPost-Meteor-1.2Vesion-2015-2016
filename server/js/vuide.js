

Meteor.methods({
setVuide: function (value,code) {
     Users.update({Code : code}, { $set: { Vuide : value } });
     var temp = Vuide_Program.findOne({Code : value});
     var a1=temp.d1_b11;
     var a2=temp.d1_b12;
     var a3=temp.d1_b13;
     var a4=temp.d1_m11;
     var a5=temp.d1_m12;
     var a6=temp.d1_m13;
     var a7=temp.d1_m21;
     var a8=temp.d1_m22;
     var a9=temp.d1_m23;
     var a10=temp.d1_l11;
     var a11=temp.d1_l12;
     var a12=temp.d1_l13;
     var a13=temp.d1_a11;
     var a14=temp.d1_a12;
     var a15=temp.d1_a13;
     var a16=temp.d1_a21;
     var a17=temp.d1_a22;
     var a18=temp.d1_a23;
     var a19=temp.d1_n11;
     var a20=temp.d1_n12;
     var a21=temp.d1_n13;
     var a22=temp.d1_n14;

     //day2
     var a23=temp.d2_b11;
     var a24=temp.d2_b12;
     var a25=temp.d2_b13;
     var a26=temp.d2_m11;
     var a27=temp.d2_m12;
     var a28=temp.d2_m13;
     var a29=temp.d2_m21;
     var a30=temp.d2_m22;
     var a31=temp.d2_m23;
     var a32=temp.d2_l11;
     var a33=temp.d2_l12;
     var a34=temp.d2_l13;
     var a35=temp.d2_a11;
     var a36=temp.d2_a12;
     var a37=temp.d2_a13;
     var a38=temp.d2_a21;
     var a39=temp.d2_a22;
     var a40=temp.d2_a23;
     var a41=temp.d2_n11;
     var a42=temp.d2_n12;
     var a43=temp.d2_n13;
     var a44=temp.d2_n14;

     //day3
     var a45=temp.d3_b11;
     var a46=temp.d3_b12;
     var a47=temp.d3_b13;
     var a48=temp.d3_m11;
     var a49=temp.d3_m12;
     var a50=temp.d3_m13;
     var a51=temp.d3_m21;
     var a52=temp.d3_m22;
     var a53=temp.d3_m23;
     var a54=temp.d3_l11;
     var a55=temp.d3_l12;
     var a56=temp.d3_l13;
     var a57=temp.d3_a11;
     var a58=temp.d3_a12;
     var a59=temp.d3_a13;
     var a60=temp.d3_a21;
     var a61=temp.d3_a22;
     var a62=temp.d3_a23;
     var a63=temp.d3_n11;
     var a64=temp.d3_n12;
     var a65=temp.d3_n13;
     var a66=temp.d3_n14;

     //day4
     var a67=temp.d4_b11;
     var a68=temp.d4_b12;
     var a69=temp.d4_b13;
     var a70=temp.d4_m11;
     var a71=temp.d4_m12;
     var a72=temp.d4_m13;
     var a73=temp.d4_m21;
     var a74=temp.d4_m22;
     var a75=temp.d4_m23;
     var a76=temp.d4_l11;
     var a77=temp.d4_l12;
     var a78=temp.d4_l13;
     var a79=temp.d4_a11;
     var a80=temp.d4_a12;
     var a81=temp.d4_a13;
     var a82=temp.d4_a21;
     var a83=temp.d4_a22;
     var a84=temp.d4_a23;
     var a85=temp.d4_n11;
     var a86=temp.d4_n12;
     var a87=temp.d4_n13;
     var a88=temp.d4_n14;

     //day5
     var a89=temp.d5_b11;
     var a90=temp.d5_b12;
     var a91=temp.d5_b13;
     var a92=temp.d5_m11;
     var a93=temp.d5_m12;
     var a94=temp.d5_m13;
     var a95=temp.d5_m21;
     var a96=temp.d5_m22;
     var a97=temp.d5_m23;
     var a98=temp.d5_l11;
     var a99=temp.d5_l12;
     var a100=temp.d5_l13;
     var a101=temp.d5_a11;
     var a102=temp.d5_a12;
     var a103=temp.d5_a13;
     var a104=temp.d5_a21;
     var a105=temp.d5_a22;
     var a106=temp.d5_a23;
     var a107=temp.d5_n11;
     var a108=temp.d5_n12;
     var a109=temp.d5_n13;
     var a110=temp.d5_n14;

     //day6
     var a111=temp.d6_b11;
     var a112=temp.d6_b12;
     var a113=temp.d6_b13;
     var a114=temp.d6_m11;
     var a115=temp.d6_m12;
     var a116=temp.d6_m13;
     var a117=temp.d6_m21;
     var a118=temp.d6_m22;
     var a119=temp.d6_m23;
     var a120=temp.d6_l11;
     var a121=temp.d6_l12;
     var a122=temp.d6_l13;
     var a123=temp.d6_a11;
     var a124=temp.d6_a12;
     var a125=temp.d6_a13;
     var a126=temp.d6_a21;
     var a127=temp.d6_a22;
     var a128=temp.d6_a23;
     var a129=temp.d6_n11;
     var a130=temp.d6_n12;
     var a131=temp.d6_n13;
     var a132=temp.d6_n14;







console.log(a4);







     Users.update({Code : code}, {
      $set: {
        d1_b11 : a1,
        d1_b12 : a2,
        d1_b13 : a3,
        d1_m11 : a4,
        d1_m12 : a5,
        d1_m13 : a6,
        d1_m21 : a7,
        d1_m22 : a8,
        d1_m23 : a9,
        d1_l11 : a10,
        d1_l12 : a11,
        d1_l13 : a12,
        d1_a11 : a13,
        d1_a12 : a14,
        d1_a13 : a15,
        d1_a21 : a16,
        d1_a22 : a17,
        d1_a23 : a18,
        d1_n11 : a19,
        d1_n12 : a20,
        d1_n13 : a21,
        d1_n14 : a22,


        d2_b11 : a23,
        d2_b12 : a24,
        d2_b13 : a25,
        d2_m11 : a26,
        d2_m12 : a27,
        d2_m13 : a28,
        d2_m21 : a29,
        d2_m22 : a30,
        d2_m23 : a31,
        d2_l11 : a32,
        d2_l12 : a33,
        d2_l13 : a34,
        d2_a11 : a35,
        d2_a12 : a36,
        d2_a13 : a37,
        d2_a21 : a38,
        d2_a22 : a39,
        d2_a23 : a40,
        d2_n11 : a41,
        d2_n12 : a42,
        d2_n13 : a43,
        d2_n14 : a44,


        d3_b11 : a45,
        d3_b12 : a46,
        d3_b13 : a47,
        d3_m11 : a48,
        d3_m12 : a49,
        d3_m13 : a50,
        d3_m21 : a51,
        d3_m22 : a52,
        d3_m23 : a53,
        d3_l11 : a54,
        d3_l12 : a55,
        d3_l13 : a56,
        d3_a11 : a57,
        d3_a12 : a58,
        d3_a13 : a59,
        d3_a21 : a60,
        d3_a22 : a61,
        d3_a23 : a62,
        d3_n11 : a63,
        d3_n12 : a64,
        d3_n13 : a65,
        d3_n14 : a66,

        d4_b11 : a67,
        d4_b12 : a68,
        d4_b13 : a69,
        d4_m11 : a70,
        d4_m12 : a71,
        d4_m13 : a72,
        d4_m21 : a73,
        d4_m22 : a74,
        d4_m23 : a75,
        d4_l11 : a76,
        d4_l12 : a77,
        d4_l13 : a78,
        d4_a11 : a79,
        d4_a12 : a80,
        d4_a13 : a81,
        d4_a21 : a82,
        d4_a22 : a83,
        d4_a23 : a84,
        d4_n11 : a85,
        d4_n12 : a86,
        d4_n13 : a87,
        d4_n14 : a88,


        d5_b11 : a89,
        d5_b12 : a90,
        d5_b13 : a91,
        d5_m11 : a92,
        d5_m12 : a93,
        d5_m13 : a94,
        d5_m21 : a95,
        d5_m22 : a96,
        d5_m23 : a97,
        d5_l11 : a98,
        d5_l12 : a99,
        d5_l13 : a100,
        d5_a11 : a101,
        d5_a12 : a102,
        d5_a13 : a103,
        d5_a21 : a104,
        d5_a22 : a105,
        d5_a23 : a106,
        d5_n11 : a107,
        d5_n12 : a108,
        d5_n13 : a109,
        d5_n14 : a110,

        d6_b11 : a111,
        d6_b12 : a112,
        d6_b13 : a113,
        d6_m11 : a114,
        d6_m12 : a115,
        d6_m13 : a116,
        d6_m21 : a117,
        d6_m22 : a118,
        d6_m23 : a119,
        d6_l11 : a120,
        d6_l12 : a121,
        d6_l13 : a122,
        d6_a11 : a123,
        d6_a12 : a124,
        d6_a13 : a125,
        d6_a21 : a126,
        d6_a22 : a127,
        d6_a23 : a128,
        d6_n11 : a129,
        d6_n12 : a130,
        d6_n13 : a131,
        d6_n14 : a132,





      }
    });
   }
});
