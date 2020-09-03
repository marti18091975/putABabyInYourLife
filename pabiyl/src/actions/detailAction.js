import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';



export function loadDetails() {

    return axios.get('/api/detailUser/').then((detailUsers) => {
        console.log("Aquest és el resultat", detailUsers.data);

        dispatcher.dispatch({
            type: actionTypes.LOAD_DETAIL_USER,
            data: detailUsers.data
        });
    });
}

/*const recipeObjectApi = await new Promise((resolve, reject) => {
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
});*/

   // const objectConverted = await recipeObjectApi.hits.map(objectConversor);

/*  const actualAction = await myDispatch(
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
}*/


