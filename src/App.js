import {
  ThemeProvider,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Slider,
  Input,
  Switch,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import { useTheme } from "@pinyinma/playground-theme";
import "@pinyinma/playground-css";

function App() {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <section className="width100">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">Device</div>
            </div>
            <div className="row-end color-text-main">
              <FilterListIcon className="m-x-5" />
              <div className="row-end border-1-gray color-text-main m-x-5 p-2">
                <SaveAltIcon />
                <div className="m-x-5">Save</div>
              </div>
            </div>
          </section>

          <section className="width100 row-between p-8 h-44-px m-t-1 bg-color-main color-text-main">
            <div className="height100 col-center color-white m-x-5 color-text-main">
              Input
            </div>
            <div className="height100 col-center m-x-5">
              <FormControl>
                <Select
                  value="Ten"
                  style={{
                    height: 28,
                    width: 150,
                    color: "#718096",
                    backgroundColor: "#000",
                  }}
                >
                  <MenuItem value="Ten">Ten</MenuItem>
                  <MenuItem value="Twenty">Twenty</MenuItem>
                  <MenuItem value="Thirty">Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
        </section>

        <section className="width100 m-t-4">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">Zoom</div>
            </div>
            <div className="row-end color-text-main m-x-5">
              <ReplayIcon />
            </div>
          </section>

          <section className="width100 row-between p-8 h-44-px m-t-1 bg-color-main color-text-main">
            <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
              Zoom/FOB
            </div>
            <Slider className="fr1" defaultValue={35} />
            <div className="fr1 col-end">
              <Input
                defaultValue={35}
                style={{
                  height: 28,
                  width: 52,
                  color: "#718096",
                  borderRadius: 4,
                }}
                type="number"
                className="input m-x-5"
              />
            </div>
          </section>
        </section>

        <section className="width100 m-t-4">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">Picture</div>
            </div>
            <div className="row-end color-text-main m-x-5">
              <ReplayIcon />
            </div>
          </section>

          <section className="width100 col-center p-8 m-t-1 bg-color-main color-text-main">
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Contrast
              </div>
              <Slider className="fr1" defaultValue={3} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={3}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Saturation
              </div>
              <Slider className="fr1" defaultValue={80} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={80}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Sharpness
              </div>
              <Slider className="fr1" defaultValue={43} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={43}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
          </section>
        </section>

        <section className="width100 m-t-4">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">Exposure</div>
            </div>
            <div className="row-end color-text-main m-x-5">
              <ReplayIcon />
            </div>
          </section>

          <section className="width100 col-center p-8 m-t-1 bg-color-main color-text-main">
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Automatic
              </div>
              <div className="col-start fr1"></div>

              <div className="fr1 row-end">
                <Switch />
              </div>
            </section>
            <section className="width100 h-44-px row-start">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Metering
              </div>
              <div className="fr2 row-end">
                <FormControl>
                  <Select
                    value="Twenty"
                    style={{
                      height: 28,
                      width: 200,
                      color: "#718096",
                      backgroundColor: "#000",
                    }}
                  >
                    <MenuItem value="Ten">Ten</MenuItem>
                    <MenuItem value="Twenty">Twenty</MenuItem>
                    <MenuItem value="Thirty">Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </section>
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Shutter Speed
              </div>
              <Slider className="fr1" defaultValue={3} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={3}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                ISO
              </div>
              <Slider className="fr1" defaultValue={92} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={92}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
          </section>
        </section>

        <section className="width100 m-t-4">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">White Balance</div>
            </div>
            <div className="row-end color-text-main ">
              <div className="row-end m-x-5">
                <div className="border-1-main p-2">AWB</div>
                <div className="color-text-main-bg color-black p-2">4067K</div>
              </div>
              <ReplayIcon />
            </div>
          </section>

          <section className="width100 col-center p-8 m-t-1 bg-color-main color-text-main">
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Automatic
              </div>
              <div className="col-start fr1"></div>

              <div className="fr1 row-end">
                <Switch />
              </div>
            </section>

            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Temperature
              </div>
              <Slider className="fr1" defaultValue={50} />
              <div className="fr1 col-end">
                <Input
                  defaultValue={50}
                  style={{
                    height: 28,
                    width: 52,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  type="number"
                  className="input m-x-5"
                />
              </div>
            </section>
          </section>
        </section>

        <section className="width100 m-t-4">
          <section className="row-between width100 h-44-px p-8 bg-color-main">
            <div className="row-start">
              <ArrowDropDownIcon className="color-white" />
              <div className="color-white m-x-5">Processing</div>
            </div>
            <div className="row-end color-text-main m-x-5">
              <ReplayIcon />
            </div>
          </section>

          <section className="width100 col-center p-8 m-t-1 bg-color-main color-text-main">
            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Noise Reduction
              </div>
              <div className="col-start fr1"></div>

              <div className="fr1 row-end">
                <Switch />
              </div>
            </section>

            <section className="width100 h-44-px row-center">
              <div className="height100 m-x-5 col-start color-white m-x-5 fr1 text-left color-text-main">
                Anti-Flicker
              </div>
              <div className="fr1 col-end">
                <Input
                  defaultValue={"50 Hz"}
                  style={{
                    height: 28,
                    width: 82,
                    color: "#718096",
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                  className="input m-x-5"
                />
              </div>
              <div className="fr1 col-end">
                <Input
                  defaultValue={"60 Hz"}
                  style={{
                    height: 28,
                    width: 82,
                    color: "#718096",
                    borderRadius: 4,
                  }}
                  className="input m-x-5"
                />
              </div>
            </section>
          </section>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
