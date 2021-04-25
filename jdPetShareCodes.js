/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',
  'MTE1NDAxNzgwMDAwMDAwMzg3ODcyMzk=@MTE1NDUyMjEwMDAwMDAwMzg4MzI2NTk=@MTE1NDAxNzYwMDAwMDAwMzg4MDk5OTM=@MTEzMzI0OTE0NTAwMDAwMDA0MjE0MTI2OQ==@MTEzMzI0OTE0NTAwMDAwMDA0Mzg2ODMwMQ==@MTE1NDUyMjEwMDAwMDAwNDM4Njg1Njc=@MTE1NDAxNzcwMDAwMDAwMzkwNDUzNDk=@MTEzMzI0OTE0NTAwMDAwMDAzOTA2MDI3Nw==@MTAxODEyMjkyMDAwMDAwMDQwNjk2OTk5@MTEzMzI0OTE0NTAwMDAwMDAzOTA3NzgwNQ==@MTE1NDUyMjEwMDAwMDAwMzkwNzg4MjE=@MTE1NDUwMTI0MDAwMDAwMDQ0OTE2Mjgz@MTE1NDUyMjEwMDAwMDAwMzkwMDg4MDU=@MTAxODEyMjkyMDAwMDAwMDM5NzQyMDgx@MTE1NDQ5OTUwMDAwMDAwNDIxNjQ3MjU@MTE1NDQ5OTUwMDAwMDAwNDI2NzUyNDM@MTEyNTEyNTE1MDAwMDAwMDA0NzI1MDg2NQ==@MTE1NDUyMjEwMDAwMDAwMzkwNTI5NDk=',

]
// 判断github action里面是否有东东萌宠互助码
if (process.env.PETSHARECODES) {
  if (process.env.PETSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东萌宠互助码选择的是用&隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('&');
  } else if (process.env.PETSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东萌宠互助码选择的是用换行隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('\n');
  } else {
    PetShareCodes = process.env.PETSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PetShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PetShareCode' + index] = PetShareCodes[i];
}