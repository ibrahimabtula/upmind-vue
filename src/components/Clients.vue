<template>
    <section>
        <b-field label="Search">
            <b-input v-model="search" :loading="$store.state.client.loading"></b-input>
        </b-field>

        <b-table
            :data="clients"
            :loading="loading"
            :striped="true"

            paginated
            backend-pagination
            :total="total"
            :per-page="perPage"
            :current-page="page"
            @page-change="onPageChange"
            backend-sorting
            :default-sort-direction="defaultSortOrder"
            :default-sort="[sortField, sortOrder]"
            @sort="onSort">

            <template slot-scope="props">
                <b-table-column field="first_name" label="First Name" sortable>
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name" numeric sortable>
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="email" label="Email" numeric sortable>
                     {{ props.row.email }}
                </b-table-column>
            </template>

        </b-table>
    </section>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
    created(){
        this.loadAsyncData();
    },
    data(){
        return{
            search: null,
            total: 50,
            perPage: 10,
            page: 1,
            defaultSortOrder: 'asc',
            sortField: 'first_name',
            sortOrder: 'asc'
        }
    },
    computed:{
        ...mapFields('client',[
        'clients',
        'loading',
        ])
    },
    watch:{
        search(){
            // Go back to first page because if we stay in page 4 for example but have only 10 result table will look empty
            this.page = 1;
            this.loadAsyncData();
        }
    },
    methods:{
        onPageChange(page) {
            this.page = page
            this.loadAsyncData()
        },
        onSort(field, order) {
            this.sortField = field
            this.sortOrder = order
            this.loadAsyncData()
        },        
        loadAsyncData(){
            this.$store.dispatch('client/fetchClients', {
                page: this.page,
                perPage: this.perPage,
                sortField: this.sortField,
                sortOrder: this.sortOrder,
                search: this.search
             })
        }
    }
}
</script>
