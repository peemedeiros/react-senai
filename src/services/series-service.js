import {doRequest} from './baseapi-service';

const RESOURSE = 'series/';

export const listar = () => {
    return doRequest(RESOURSE, 'GET');
}

export const inserir = (serie) => {
    return doRequest(RESOURSE, 'POST', serie);
}

export const remover = (id) => {
    return doRequest(RESOURSE, 'DELETE', '', id);
}

export const atualizar = (serie) => {
    return doRequest(RESOURSE, 'PUT', serie, serie.id);
}