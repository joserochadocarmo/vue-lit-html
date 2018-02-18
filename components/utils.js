//Função usada para simular o lint-html
const html = (h) => `${h}`;

//Register Navbar component
export const Navbar = {
    template: html`
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>`,
    props: {
        title: {
            type: String,
            default: "CERCOMP"
        }
    }
};

//Register Page header component
export const PageHeading = {
    template: html`
        <div>
            <h1 class="text-center">{{heading}}</h1>
            <h2 class="text-center">{{subtitle}}</h2>
        </div>
        `,
    props: {
        heading: {
            type: String,
            default: "UFG Lista de Pessoas"
        }
    },
    data: function () {
        return { subtitle: "Listagem teste" }
    }
};

//Register staff list component
export const StaffList = {
    template: html`
        <table class="table table-bordered">
            <tbody>
                <tr v-for="staff in staffs">
                    <td>{{staff.name}}</td>
                    <td>{{staff.email}}</td>
                    <td>{{staff.role}}</td>
                </tr>
            </tbody>
        </table>`,
    data: function () {
        return {
            staffs: [{
                name: 'John Doe',
                email: 'John.doe@acme.org',
                role: 'Central Executive Officer'
            }, {
                name: 'Rebbecca Dan',
                email: 'rebbecca.dan@acme.org',
                role: 'Backend Developer'
            }, {
                name: 'Tope Joshua',
                email: 'tope.joshua@acme.org',
                role: 'Financial Analyst'
            }, {
                name: 'Alima Fatima',
                email: 'alima.fatima@acme.org',
                role: 'Deputy CTO'
            }, {
                name: 'Sikiru Oluwaseun',
                email: 'sikiru.oluwaseun@acme.org',
                role: 'Project Manager'
            }, {
                name: 'Larry Greg',
                email: 'larry.greg@acme.org',
                role: 'Senior Developer'
            }, {
                name: 'Inna Brown',
                email: 'inna.brown@acme.org',
                role: 'Community Manager'
            }, {
                name: 'Tunde Ogundipe',
                email: 'tunde.ogundipe@acme.org',
                role: 'Chief Technology Officer'
            }, {
                name: 'Bald Kuma',
                email: 'bald.kuma@acme.org',
                role: 'Human Resource'
            }, {
                name: 'Ramon Aduragbemi',
                email: 'ramon.aduragbemi@acme.org',
                role: 'System Administrator'
            },]
        }
    }
};

//Register Page Footer component
export const PageFooter = {
    template: html`
        <footer>
            Footer text
        </footer>
        `
};
