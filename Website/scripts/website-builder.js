var elements = [
    {
        "name": "Hemoglobin",
        "id": "hemoglobin"
    },
    {
        "name": "White Blood",
        "id": "whiteBlood"
    },
    {
        "name": "Platelet",
        "id": "platelet"
    },
    {
        "name": "Red Blood",
        "id": "redBlood"
    },
    {
        "name": "Haematocrit",
        "id": "haematocrit"
    },
    {
        "name": "MCV",
        "id": "MCV"
    },
    {
        "name": "MCH",
        "id": "MCH"
    },
    {
        "name": "MCHC",
        "id": "MCHC"
    },
    {
        "name": "Neutrophil",
        "id": "neutrophil"
    },
    {
        "name": "Lymphocyte",
        "id": "lymphocyte"
    },
    {
        "name": "Monocyte",
        "id": "monocyte"
    },
    {
        "name": "Eosinophil",
        "id": "eosinophil"
    },
    {
        "name": "Basophil",
        "id": "basophil"
    }
];

for(i = 11; i >= 0; i--){
    $('#contract-form').before(addTemplate(i));
}

function addTemplate(index) {
    var template = '    <div class="col-sm-6"> \
                            <div class="form-group row"> \
                                <label for="' + elements[index].id + '" class="col-sm-4 col-form-label">' + elements[index].name + '</label> \
                                <div class="col-sm-8"> \
                                    <input type="text" class="form-control" name="' + elements[index].id + '" id="' + elements[index].id + '"> \
                                </div> \
                            </div>\
                        </div>';
    
    return template;
}