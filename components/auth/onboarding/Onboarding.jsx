import React from "react";
import "./style.css";

const Onboarding = () => {
  const onboarding_arr = Array.from({ length: 7 }).fill("Onboarding Label");
  return (
    <div className="onboarding_component_container absolute flex align_center justify_center">
      <div className="onboarding_screen flex column justify_between gap2rem">
        <h3 className="sticky">AJL LOGO</h3>
        <section className="flex column gap2rem align_self_center onboarding_type">
          <h2 className="text_center">
            Choose your business type{" "}
            <span className="absolute pointer">Skip</span>
          </h2>

          <div className="flex wrap gap1rem justify_center onboarding_map">
            {onboarding_arr.map((imgs, _) => (
              <section
                key={_}
                className="flex column gap05rem onboarding_mapped_item"
              >
                <div className="onboarding_img pointer" />
                <p className="text_center">{imgs}</p>
              </section>
            ))}
          </div>
        </section>
        <section className="onboarding_btn sticky flex justify_center">
          <button>Next</button>
        </section>
      </div>
    </div>
  );
};

export default Onboarding;
