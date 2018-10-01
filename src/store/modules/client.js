import { getField, updateField } from 'vuex-map-fields';
import clientAPI from '../../api/client'

// initial state
const state = {
  clients: [],
  loading: false,
}

// getters
const getters = {
  getField,
}

// actions
const actions = {
  fetchClients ({ commit, state }, { page, perPage, sortField, sortOrder, search }) {
    commit('setLoading', true);
    clientAPI
    .getClients(page, perPage, sortField, sortOrder, (search && search.length > 0 ? search : '')
        , data => { 
            commit('setClients', data);
            commit('setLoading', false); 
        }
        , error => {
            commit('setError', error);
            commit('setClients', []);
            commit('setLoading', false); 
        }
    );
  }
}

// mutations
const mutations = {
  updateField,
  setClients (state, clients ) {
    state.clients = clients
  },
  setLoading( state, loading ){
      state.loading = loading;
  },
  setError( state, error){
      console.log(error);
      //Do somthing with the error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}