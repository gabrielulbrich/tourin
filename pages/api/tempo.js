function tempo (request,response) {
    const dynamicDate = new date();

    response.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;