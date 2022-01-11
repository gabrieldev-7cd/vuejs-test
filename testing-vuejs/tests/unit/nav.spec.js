import { mount } from "@vue/test-utils"
import Nav from "@/components/Nav.vue"

describe("Nav.vue", () => {
    
    it("renders a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: true
                };
            },
        });

        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual("My Profile");
        /*
        No caso de o elemento de teste ser pre renderizado sua referencia pode ser
        feita utilizando o ".get" no wrapper.
        */
    });
        
    
    it("should not render a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggerIn: false
                };
            },
        });

        const profileLink = wrapper.find("#profile");
        expect(profileLink.exists()).toBe(false);
        /*
        Quando não se sabe se o elemento vai ou não estar renderizado para o teste 
        "no caso de um teste de renderização condicional" deve se coloca o ".exists()"
        e o "get" para obter o objeto a ser validado para não causar o lançamento
        de erro caso algo tenha dado errado na renderização.
        */
    });
});