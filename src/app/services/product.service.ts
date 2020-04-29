import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    private textImageList = [{
        text: 'Dashboard',
        image: 'assets/svg/dashboard.svg'
    },
    {
        text: 'Admin Profile',
        image: 'assets/svg/user.svg'
    },
    {
        text: 'Organisation Profile',
        image: 'assets/svg/connection.svg'
    },
    {
        text: 'Add Employees',
        image: 'assets/svg/worker.svg'
    },
    {
        text: 'View Employees',
        image: 'assets/svg/eyeRed.svg'
    },
    {
        text: 'Update Wallet',
        image: 'assets/svg/wallet.svg'
    },
    {
        text: 'Product',
        image: 'assets/svg/product.svg'
    },
    {
        text: 'Reward',
        image: 'assets/svg/medal.svg'
    },
    {
        text: 'Digital Certificate',
        image: 'assets/svg/certificate.svg'
    },
    {
        text: 'Wall Of Fame',
        image: 'assets/svg/customer.svg'
    },
    {
        text: 'Poll',
        image: 'assets/svg/poll.svg'
    },
    {
        text: 'Announcement',
        image: 'assets/svg/megaphone.svg'
    }];

    getTextImageList() {
        return [...this.textImageList];
    }

    getSpecificDetailText(index) {
        return this.textImageList[index].text
    }
}
