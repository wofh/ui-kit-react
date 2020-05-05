import { useContext } from "react"
import { ThemeContext } from "styled-components"
import merge from 'lodash.merge'

import defaultTheme from "../../../shared/theme";

const useTheme = () => {
	return merge(defaultTheme, useContext(ThemeContext)||{})
};

export default useTheme;