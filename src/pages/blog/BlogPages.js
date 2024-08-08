import PrintYourBrain from "./posts_pages/PrintYourBrain";
import UnderstandingTransformers from "./posts_pages/UnderstandingTransformers";
import UnderstandingAttention from "./posts_pages/UnderstandingAttention";

const blogPages = [
    {
        blogPageAddress: "understanding_attention",
        blogPageComponent: <UnderstandingAttention />,
        title: "Understanding attention",
        illustration: "/assets/blog/test_article/attention_architecture_cropped.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        date: "01 Aug 2024 12:31:00 GMT"
    },
    {
        blogPageAddress: "understanding_transformers",
        blogPageComponent: <UnderstandingTransformers />,
        title: "Understanding transformers",
        illustration: "/assets/blog/test_article/attention_architecture_cropped.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        date: "08 Aug 2024 10:32:00 GMT"
    },
    {
        blogPageAddress: '3d_print_your_brain',
        blogPageComponent: <PrintYourBrain />,
        title: "3D print your brain",
        illustration: "/assets/blog/3D_print_your_brain/brain_stl.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        date: "9 Jul 2023 10:32:00 GMT"
    },
];

export default blogPages;