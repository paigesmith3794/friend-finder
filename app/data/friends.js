var friends = [
    {
        name: "Abel Tesfaye",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffrostsnow.com%2Fuploads%2Fbiography%2F2017%2F07%2F27%2Fxabel-tesfaye.jpg.pagespeed.ic.vaK64V4RvU.jpg&imgrefurl=https%3A%2F%2Ffrostsnow.com%2Fabel-tesfaye&docid=zgVlvZcpi1-2zM&tbnid=1iCRX3eMRNR1JM%3A&vet=10ahUKEwjuvtuEq-riAhUxMn0KHSh6C2sQMwh6KAAwAA..i&w=450&h=450&bih=766&biw=657&q=Abel%20Tesfaye&ved=0ahUKEwjuvtuEq-riAhUxMn0KHSh6C2sQMwh6KAAwAA&iact=mrc&uact=8",
        scores: [5, 2, 2, 3, 2, 1, 5, 4, 4, 1]
    },
    {
        name: "Bella Hadid",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.r29static.com%2F%2Fbin%2Fentry%2Fa38%2F720x864%2C85%2F1966502%2Fimage.webp&imgrefurl=https%3A%2F%2Fwww.refinery29.com%2Fen-us%2F2018%2F05%2F199091%2Fbella-hadid-doesnt-smile-harpers-bazaar-interview&docid=sZCUqciZGvf2VM&tbnid=RYER23RocJ1RrM%3A&vet=10ahUKEwiwm7Ojq-riAhVjOX0KHezUAtUQMwh9KAEwAQ..i&w=720&h=864&bih=766&biw=657&q=bella%20hadid&ved=0ahUKEwiwm7Ojq-riAhVjOX0KHezUAtUQMwh9KAEwAQ&iact=mrc&uact=8",
        scores: [5, 2, 2, 3, 2, 1, 5, 4, 4, 1]
    },
    {
        name: "Kendall Jenner",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2016%2F07%2Fkendall-jenner-free-nipple.jpg&imgrefurl=https%3A%2F%2Ftime.com%2F4423863%2Fkendall-jenner-free-the-nipple%2F&docid=S_c0BDrim2rfeM&tbnid=ilRDnbDY1RWtBM%3A&vet=10ahUKEwid37Pzq-riAhVgHzQIHZk0BGAQMwh9KAAwAA..i&w=5184&h=3456&bih=766&biw=657&q=kendall%20jenner&ved=0ahUKEwid37Pzq-riAhVgHzQIHZk0BGAQMwh9KAAwAA&iact=mrc&uact=8",
        scores: [1, 1, 1, 2, 2, 3, 4, 5, 5, 5]
    },
    {
        name: "Kylie Jenner",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.newidea.com.au%2Fmedia%2F20046%2F17-12-05-kyliejenner-pw.jpg%3Fwidth%3D432%26height%3D267%26mode%3Dcrop%26center%3D0.0%2C0.0&imgrefurl=https%3A%2F%2Fwww.newidea.com.au%2Fkylie-jenner-showed-off-her-billionaire-body-in-very-racy-photoshoot&docid=ma1ca3XxC8q6_M&tbnid=hkVRnRWLaOertM%3A&vet=10ahUKEwjGw4GBrOriAhUoIDQIHRtAAWwQMwhwKAQwBA..i&w=432&h=267&bih=766&biw=657&q=kylie%20jenner&ved=0ahUKEwjGw4GBrOriAhUoIDQIHRtAAWwQMwhwKAQwBA&iact=mrc&uact=8",
        scores: [4, 4, 5, 5, 1, 2, 3, 1, 3, 4]
    },
    {
        name: "Will Smith",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F51%2F23%2F24%2F10827008%2F3%2F920x920.jpg&imgrefurl=https%3A%2F%2Fwww.chron.com%2Fentertainment%2Fslideshow%2FSAT-scores-of-famous-people-81475.php&docid=m84ojP51AVZNYM&tbnid=O-QVuVTK4cWaUM%3A&vet=10ahUKEwiuqfaRrOriAhUoFzQIHT3GAxkQMwiAASgGMAY..i&w=920&h=611&bih=766&biw=657&q=famous%20people&ved=0ahUKEwiuqfaRrOriAhUoFzQIHT3GAxkQMwiAASgGMAY&iact=mrc&uact=8",
        scores: [5, 5, 5, 5, 2, 2, 2, 3, 3, 1]
    },
    {
        name: "Jim Carrey",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Far_1%3A1%252Cc_fill%252Ccs_srgb%252Cg_face%252Cq_auto%3Agood%252Cw_300%2FMTE4MDAzNDEwNzM3MDA2MDk0%2Fjim-carrey-9542079-1-402.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Factor%2Fjim-carrey&docid=XV1GSid58fbMmM&tbnid=WLIOWG9rE3Ar8M%3A&vet=10ahUKEwjy0M6krOriAhUUOn0KHTRPCA8QMwiCASgEMAQ..i&w=300&h=300&bih=766&biw=657&q=jim%20carrey&ved=0ahUKEwjy0M6krOriAhUUOn0KHTRPCA8QMwiCASgEMAQ&iact=mrc&uact=8",
        scores: [4, 3, 2, 1, 3, 4, 5, 5, 3, 2]
    },
];

module.exports = friends;