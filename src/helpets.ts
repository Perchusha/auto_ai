const textStyles = `
    text-align: center;
    padding: 1rem 2rem;
    color: #ffffff;
    background: #353533;
    border-radius: 0.3rem;
    width: auto;
    height: auto;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: system-ui;
    font-size: 2rem;
    border: 1px solid #484846;
    min-width: 200px;
`;

export const getRespondHtmlContainer = (text: string) => {
  return `<span style="${textStyles}">${text}</span>`;
};
