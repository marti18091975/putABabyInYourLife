import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
var req = new XMLHttpRequest();
const URL_API_SEARCH = 'https://localhost:27017/';
export async function loadDetails(newSearch) {
    if (!newSearch) {
        newSearch = '5f4cf2801c355a4c74f55d4f'
    }
    const recipeObjectApi = await new Promise((resolve, reject) => {
        req.open(
            'GET',
            URL_API_SEARCH +
            newSearch,
            true
        );
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    reject('Error Loading page');
                }
            }
        };
        req.send(null);
    });

    const objectConverted = await recipeObjectApi.hits.map(objectConversor);

    const actualAction = await myDispatch(
        actionTypes.LOAD_DETAIL_USER,
        objectConverted
    );

    return actualAction;
}

function myDispatch(actualActionType, actualData) {
    return dispatcher.dispatch({
        type: actualActionType,
        data: actualData
    });
}


