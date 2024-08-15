import PrintYourBrain from "./posts_pages/PrintYourBrain";
import UnderstandingTransformers from "./posts_pages/UnderstandingTransformers";
import UnderstandingAttention from "./posts_pages/UnderstandingAttention";

const blogPages = [
    {
        blogPageAddress: '3d_print_your_brain',
        hidden: false,
        blogPageComponent: <PrintYourBrain />,
        title: "3D print your brain",
        illustration: "/assets/blog/3D_print_your_brain/brain_printed_model.jpg",
        description:
            "In this page, you will find a detailed step-by-step guide to transform the images taken during your MRI into a high-fidelity 3D model of your brain. " +
            "We will also cover the steps required to retrieve each hemisphere and the subcortical regions, making your model truly .",
        date: "15 Aug 2023 18:00:00 GMT"
    },
    {
        blogPageAddress: "understanding_attention",
        hidden: true,
        blogPageComponent: <UnderstandingAttention />,
        title: "Understanding attention",
        illustration: "/assets/blog/test_article/attention_architecture_cropped.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. " +
            "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        date: "01 Aug 2024 12:31:00 GMT"
    },
    {
        blogPageAddress: "understanding_transformers",
        hidden: false,
        blogPageComponent: <UnderstandingTransformers />,
        title: "Understanding transformers",
        illustration: "/assets/blog/test_article/attention_architecture_cropped.png",
        description:
            "Work in progress...",
        date: "08 Aug 2024 10:32:00 GMT"
    },
];

export default blogPages;