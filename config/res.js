module.exports = (res, data, errors, msg, code) => {
    const respon = {"msg": msg};
    if (data) {
        respon.data = data
    }

    if (errors) {
        respon.errors = errors
    }


    res.status(code).json(respon)
}