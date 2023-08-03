import { Combobox, Option, Text } from "@fluentui/react-components";
import { FC } from "react";
import { Section } from "./Section";

export const LoginType: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 10, boxSizing: "border-box" }}>
            <Text size={600}>Tipo de Inicio de Sesión</Text>
            <Section
                title="Inicio de Sesión"
                content={
                    <div style={{ display: "flex" }}>
                        <Combobox placeholder="Elige">
                            <Option id="windows" key="item-1">
                                Autenticación de Windows
                            </Option>
                            <Option id="usuario" key="item-2">
                                Usuario
                            </Option>
                        </Combobox>
                    </div>
                }
            />
        </div>
    );
};
