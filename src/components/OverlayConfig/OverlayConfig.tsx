import React, { useContext } from "react";
import {
  ConfigButton,
  ConfigContainer,
  ConfigHeading,
  ConfigInput,
  ConfigInputWrapper,
  ConfigLabel,
  ConfigPreviewImage,
  ConfigPreviewScoreText,
  ConfigPreviewScoreWrapper,
  ConfigPreviewWrapper,
  ConfigSubHeading,
  ConfigSubHeading2,
  ConfigWrapper,
} from "./OverlayConfig.style";
import { ConfigContext } from "../../contexts/ConfigContext";

export const OverlayConfig = () => {
  const { configInfo, setConfigInfo } = useContext(ConfigContext);

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
            isUMN: event.target.checked,
          },
        })
      : setConfigInfo({
          ...configInfo,
          orange: {
            ...configInfo.orange,
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
          <ConfigPreviewImage src={configInfo.orange.avatar} />
          <br />
          <ConfigPreviewScoreWrapper
            primary={configInfo.orange.primary}
            secondary={configInfo.orange.secondary}
          >
            <ConfigPreviewScoreText>Series</ConfigPreviewScoreText>
          </ConfigPreviewScoreWrapper>
          <br />
        </ConfigPreviewWrapper>
      </ConfigWrapper>
    </ConfigContainer>
  );
};
