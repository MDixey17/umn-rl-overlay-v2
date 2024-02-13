import React, { useContext } from "react";
import {
  ConfigButton,
  ConfigColorTextInput,
  ConfigContainer,
  ConfigHeading,
  ConfigInput,
  ConfigInputWrapper,
  ConfigLabel,
  ConfigLeagueLogoPreview,
  ConfigPreviewImage,
  ConfigPreviewScoreText,
  ConfigPreviewScoreWrapper,
  ConfigPreviewWrapper,
  ConfigSubHeading,
  ConfigSubHeading2,
  ConfigWrapper,
} from "./OverlayConfig.style";
import { ConfigContext } from "../../contexts/ConfigContext";
import {
  DEFAULT_BLUE_COLORS,
  DEFAULT_ORANGE_COLORS,
} from "../../constants/ComponentConstants";

import CRLLogo from "../../assets/logos/leagues/CRL.png";
import NACELogo from "../../assets/logos/leagues/NACE.png";
import SummerSeriesLogo from "../../assets/logos/leagues/SummerSeries.png";
import BECLogo from "../../assets/logos/leagues/BEC.png";

const LEAGUE_LOGO_MAP: Map<string, string> = new Map([
  ["CRL", CRLLogo],
  ["BEC", BECLogo],
  ["Summer Series", SummerSeriesLogo],
  ["NACE", NACELogo],
]);

export const OverlayConfig = () => {
  const { configInfo, setConfigInfo } = useContext(ConfigContext);

  const UMN_PRIMARY = "#5f0b2f";
  const UMN_SECONDARY = "#fabd22";

  const handleAvatarChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setConfigInfo({
          ...configInfo,
          blue: {
            ...configInfo.blue,
            avatar: event.target.value,
          },
        })
      : setConfigInfo({
          ...configInfo,
          orange: {
            ...configInfo.orange,
            avatar: event.target.value,
          },
        });
  };

  const handlePrimaryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setConfigInfo({
          ...configInfo,
          blue: {
            ...configInfo.blue,
            primary: event.target.value,
          },
        })
      : setConfigInfo({
          ...configInfo,
          orange: {
            ...configInfo.orange,
            primary: event.target.value,
          },
        });
  };

  const handleSecondaryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setConfigInfo({
          ...configInfo,
          blue: {
            ...configInfo.blue,
            secondary: event.target.value,
          },
        })
      : setConfigInfo({
          ...configInfo,
          orange: {
            ...configInfo.orange,
            secondary: event.target.value,
          },
        });
  };

  const handleIsUmnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setConfigInfo({
          ...configInfo,
          blue: {
            ...configInfo.blue,
            primary: event.target.checked
              ? UMN_PRIMARY
              : DEFAULT_BLUE_COLORS.primary,
            secondary: event.target.checked
              ? UMN_SECONDARY
              : DEFAULT_BLUE_COLORS.secondary,
            isUMN: event.target.checked,
          },
        })
      : setConfigInfo({
          ...configInfo,
          orange: {
            ...configInfo.orange,
            primary: event.target.checked
              ? UMN_PRIMARY
              : DEFAULT_ORANGE_COLORS.primary,
            secondary: event.target.checked
              ? UMN_SECONDARY
              : DEFAULT_ORANGE_COLORS.secondary,
            isUMN: event.target.checked,
          },
        });
  };

  const handleSeriesLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const seriesLength = Number(event.target.value);
    if (!isNaN(seriesLength) && seriesLength > 0) {
      setConfigInfo({
        ...configInfo,
        seriesLength: seriesLength,
      });
    }
  };

  const handleBroadcastTeamChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    member: "1" | "2" | "B"
  ) => {
    if (member === "1") {
      setConfigInfo({
        ...configInfo,
        broadcastTeam: {
          ...configInfo.broadcastTeam,
          caster1: event.target.value,
        },
      });
    } else if (member === "2") {
      setConfigInfo({
        ...configInfo,
        broadcastTeam: {
          ...configInfo.broadcastTeam,
          caster2: event.target.value,
        },
      });
    } else if (member === "B") {
      setConfigInfo({
        ...configInfo,
        broadcastTeam: {
          ...configInfo.broadcastTeam,
          broadcaster: event.target.value,
        },
      });
    }
  };

  const handleLeagueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = event.target.value;
    if (
      textInput === "CRL" ||
      textInput === "BEC" ||
      textInput === "NACE" ||
      textInput === "Summer Series"
    ) {
      setConfigInfo({
        ...configInfo,
        leagueAvatar: LEAGUE_LOGO_MAP.get(textInput)!,
      });
    } else {
      setConfigInfo({
        ...configInfo,
        leagueAvatar: "",
      });
    }
  };

  const isValidInputs = (): boolean => {
    return (
      configInfo.blue.avatar !== "" &&
      configInfo.orange.avatar !== "" &&
      configInfo.seriesLength > 0
    );
  };

  const onSubmit = () => {
    setConfigInfo({
      ...configInfo,
      hideConfig: true,
    });
  };

  return (
    <ConfigContainer>
      <ConfigHeading>UMN RL Overlay</ConfigHeading>
      <ConfigWrapper>
        <ConfigInputWrapper>
          <ConfigSubHeading>Settings</ConfigSubHeading>
          <ConfigSubHeading2>Blue Team</ConfigSubHeading2>
          <ConfigLabel>Primary Color: </ConfigLabel>
          <ConfigInput
            type="color"
            id="blue_primary"
            name="blue_primary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryChange(e, true)
            }
            value={configInfo.blue.primary}
          />
          <ConfigColorTextInput
            type="text"
            id="blue_primary_type"
            name="blue_primary_type"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryChange(e, true)
            }
            value={configInfo.blue.primary}
          />
          <br />
          <ConfigLabel>Secondary Color: </ConfigLabel>
          <ConfigInput
            type="color"
            id="blue_secondary"
            name="blue_secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSecondaryChange(e, true)
            }
            value={configInfo.blue.secondary}
          />
          <ConfigColorTextInput
            type="text"
            id="blue_secondary_type"
            name="blue_secondary_type"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryChange(e, true)
            }
            value={configInfo.blue.secondary}
          />
          <br />
          <ConfigLabel>Logo URL: </ConfigLabel>
          <ConfigInput
            type="url"
            id="blue_avatar"
            name="blue_avatar"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleAvatarChange(e, true)
            }
          />
          <br />
          <ConfigLabel>
            <ConfigInput
              type="checkbox"
              id="blue_isUmn"
              name="blue_isUmn"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleIsUmnChange(e, true)
              }
            />
            UMN?
          </ConfigLabel>
          <br />
          <br />
          <ConfigSubHeading2>Orange Team</ConfigSubHeading2>
          <ConfigLabel>Primary Color: </ConfigLabel>
          <ConfigInput
            type="color"
            id="orange_primary"
            name="orange_primary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryChange(e, false)
            }
            value={configInfo.orange.primary}
          />
          <ConfigColorTextInput
            type="text"
            id="orange_primary_type"
            name="orange_primary_type"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryChange(e, false)
            }
            value={configInfo.orange.primary}
          />
          <br />
          <ConfigLabel>Secondary Color: </ConfigLabel>
          <ConfigInput
            type="color"
            id="orange_secondary"
            name="orange_secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSecondaryChange(e, false)
            }
            value={configInfo.orange.secondary}
          />
          <ConfigColorTextInput
            type="text"
            id="orange_secondary_type"
            name="orange_secondary_type"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSecondaryChange(e, false)
            }
            value={configInfo.orange.secondary}
          />
          <br />
          <ConfigLabel>Logo URL: </ConfigLabel>
          <ConfigInput
            type="url"
            id="orange_avatar"
            name="orange_avatar"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleAvatarChange(e, false)
            }
          />
          <br />
          <ConfigLabel>
            <ConfigInput
              type="checkbox"
              id="orange_isUmn"
              name="orange_isUmn"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleIsUmnChange(e, false)
              }
            />
            UMN?
          </ConfigLabel>
          <br />
          <br />
          <ConfigSubHeading2>General</ConfigSubHeading2>
          <ConfigLabel>Series Length: </ConfigLabel>
          <ConfigInput
            type="number"
            id="series_length"
            name="series_length"
            onChange={handleSeriesLengthChange}
          />
          <br />
          <ConfigLabel>League: </ConfigLabel>
          <ConfigInput
            type="text"
            id="league"
            name="league"
            onChange={handleLeagueChange}
            placeholder="CRL / BEC / NACE"
          />
          <br />
          <ConfigLabel>Caster 1: </ConfigLabel>
          <ConfigInput
            type="text"
            id="caster_one"
            name="caster_one"
            onChange={(e) => handleBroadcastTeamChange(e, "1")}
          />
          <br />
          <ConfigLabel>Caster 2: </ConfigLabel>
          <ConfigInput
            type="text"
            id="caster_two"
            name="caster_two"
            onChange={(e) => handleBroadcastTeamChange(e, "2")}
          />
          <br />
          <ConfigLabel>Broadcaster: </ConfigLabel>
          <ConfigInput
            type="text"
            id="broadcaster"
            name="broadcaster"
            onChange={(e) => handleBroadcastTeamChange(e, "B")}
          />
          <br />
          <ConfigButton
            disabled={!isValidInputs()}
            onClick={() => {
              onSubmit();
            }}
          >
            Submit!
          </ConfigButton>
        </ConfigInputWrapper>
        <ConfigPreviewWrapper>
          <ConfigSubHeading>Preview</ConfigSubHeading>
          <br />
          <ConfigPreviewImage src={configInfo.blue.avatar} />
          <br />
          <ConfigPreviewScoreWrapper
            primary={configInfo.blue.primary}
            secondary={configInfo.blue.secondary}
          >
            <ConfigPreviewScoreText>Series</ConfigPreviewScoreText>
          </ConfigPreviewScoreWrapper>
          <br />
          <br />
          <br />
          <br />
          <br />
          <ConfigPreviewImage src={configInfo.orange.avatar} />
          <br />
          <ConfigPreviewScoreWrapper
            primary={configInfo.orange.primary}
            secondary={configInfo.orange.secondary}
          >
            <ConfigPreviewScoreText>Series</ConfigPreviewScoreText>
          </ConfigPreviewScoreWrapper>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ConfigLeagueLogoPreview src={configInfo.leagueAvatar} />
          <br />
        </ConfigPreviewWrapper>
      </ConfigWrapper>
    </ConfigContainer>
  );
};
