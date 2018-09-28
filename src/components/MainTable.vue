<template>
    <section>
        <b-field label="Search">
            <b-input v-model="search"></b-input>
        </b-field>

        <b-table
            :data="$store.state.client.clients"
            :loading="$store.state.client.loading"
            :striped="true"

            paginated
            backend-pagination
            :total="total"
            :per-page="perPage"
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
export default {
    created(){
        this.loadAsyncData();
    },
    data(){
        return{
            search: null,
            loading: false,
            total: 50,
            perPage: 10,
            page: 1,
            defaultSortOrder: 'asc',
            sortField: 'first_name',
            sortOrder: 'asc'
        }
    },
    watch:{
        search(){
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
