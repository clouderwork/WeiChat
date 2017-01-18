var ywk = require('../../utils/ywk')
Page({
    data: {
        amount: '',
        time: ['一周以内', '一个月内', '1-3个月', '3-6个月', '6个月以上'],
        objectTime: [
            {
                id: 5,
                name: '一周以内'
            },
            {
                id: 4,
                name: '一个月内'
            },
            {
                id: 3,
                name: '1-3个月'
            },
            {
                id: 2,
                name: '3-6个月'
            },
            {
                id: 1,
                name: '6个月以上'
            }
        ],
        index: 0
    },
    chooseTime (e) {
        this.setData({
            index: e.detail.value
        })
    },
    submitProposal (e) {
        console.log('dsfsf')
        ywk.ajaxJson('/api/user/signin', this.data, 'POST').then((res) => {
            if (res.error_code === 0) {
                console.log('提交成功')
            }
        }, (err) => {
            console.log(err)
        })
    }
})
