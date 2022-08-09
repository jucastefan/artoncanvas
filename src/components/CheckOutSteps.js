const CheckoutSteps = {
  render: (props) => {
    return `
        <div class="container-fluid checkout-steps ">
          <div class="${props.step1 ? "active" : ""}">Logare</div>
          <div class="${props.step2 ? "active" : ""}">Info</div>
          <div class="${props.step3 ? "active" : ""}">Plată</div>
          <div class="${props.step4 ? "active" : ""}">Comandă</div>
        </div>
        `;
  },
};
export default CheckoutSteps;
