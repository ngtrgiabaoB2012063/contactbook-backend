<template>
    <div>
        <ContactForm :contact="contact" @submit:contact="createdContact" />
    </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    data() {
        return {
            contact: {
                name: "",
                email: "",
                address: "",
                phone: "",
            },
            message: "",
        };
    },
    components: {
        ContactForm,
    },
    methods: {
        async createdContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Đã tạo liên hệ thành công";
                alert("Thêm liên hệ thành công");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style></style>
