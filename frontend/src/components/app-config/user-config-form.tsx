/* Copyright 2024 Marimo. All rights reserved. */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  APP_WIDTHS,
  type UserConfig,
  UserConfigSchema,
} from "../../core/config/config-schema";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { saveUserConfig } from "../../core/network/requests";
import { useUserConfig } from "../../core/config/config";
import { NativeSelect } from "../ui/native-select";
import { KEYMAP_PRESETS } from "@/core/codemirror/keymaps/keymaps";
import { CopilotConfig } from "@/core/codemirror/copilot/copilot-config";
import { SettingTitle, SettingDescription, SettingSubtitle } from "./common";
import { THEMES } from "@/theme/useTheme";
import { isWasm } from "@/core/wasm/utils";
import { PackageManagerNames } from "../../core/config/config-schema";
import { Kbd } from "../ui/kbd";
import { NumberField } from "@/components/ui/number-field";
import { useRef } from "react";
import { useSetAtom } from "jotai";
import { keyboardShortcutsAtom } from "../editor/controls/keyboard-shortcuts";
import { Button } from "../ui/button";
import { useTranslation } from 'react-i18next';

const formItemClasses = "flex flex-row items-center space-x-1 space-y-0";

export const UserConfigForm: React.FC = () => {
  const [config, setConfig] = useUserConfig();
  const formElement = useRef<HTMLFormElement>(null);
  const setKeyboardShortcutsOpen = useSetAtom(keyboardShortcutsAtom);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // Create form
  const form = useForm<UserConfig>({
    resolver: zodResolver(UserConfigSchema),
    defaultValues: config,
  });

  const onSubmit = async (values: UserConfig) => {
    await saveUserConfig({ config: values }).then(() => {
      setConfig(values);
    });
  };

  const isWasmRuntime = isWasm();

  const renderCopilotProvider = () => {
    const copilot = form.getValues("completion.copilot");
    if (copilot === false) {
      return null;
    }
    if (copilot === "codeium") {
      return (
        <>
          <p className="text-sm text-muted-secondary">
            {t('aiAssist')}{" "}
            <a
              className="text-link hover:underline"
              href="https://docs.marimo.io/guides/editor_features/ai_completion.html#codeium-copilot"
              target="_blank"
              rel="noreferrer"
            >
              {t('aiCodeCompletion')}
            </a>
            .
          </p>
          <FormField
            control={form.control}
            name="completion.codeium_api_key"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('apiKey')}</FormLabel>
                <FormControl>
                  <Input
                    data-testid="codeium-api-key-input"
                    className="m-0 inline-flex"
                    placeholder={t('apiKey')}
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      );
    }
    if (copilot === "github") {
      return <CopilotConfig />;
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formElement}
        onChange={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div>
          <SettingTitle>{t('userConfig')}</SettingTitle>
          <SettingDescription>
            {t('settingsAppliedToAllMarimoNotebooks')}
          </SettingDescription>
        </div>
        <SettingGroup title={t('editor')}>
          <FormField
            control={form.control}
            name="save.autosave"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel className="font-normal">{t('autosave')}</FormLabel>
                <FormControl>
                  <Checkbox
                    data-testid="autosave-checkbox"
                    checked={field.value === "after_delay"}
                    disabled={field.disabled}
                    onCheckedChange={(checked) => {
                      field.onChange(checked ? "after_delay" : "off");
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="save.autosave_delay"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('autosaveDelaySeconds')}</FormLabel>
                <FormControl>
                  <span className="inline-flex mr-2">
                    <NumberField
                      data-testid="autosave-delay-input"
                      className="m-0 w-24"
                      isDisabled={
                        form.getValues("save.autosave") !== "after_delay"
                      }
                      {...field}
                      value={field.value / 1000}
                      minValue={1}
                      onChange={(value) => {
                        field.onChange(value * 1000);
                        onSubmit(form.getValues());
                      }}
                    />
                  </span>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="save.format_on_save"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel className="font-normal">{t('formatOnSave')}</FormLabel>
                <FormControl>
                  <Checkbox
                    data-testid="format-on-save-checkbox"
                    checked={field.value}
                    disabled={field.disabled}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="formatting.line_length"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('lineLength')}</FormLabel>
                  <FormControl>
                    <span className="inline-flex mr-2">
                      <NumberField
                        data-testid="line-length-input"
                        className="m-0 w-24"
                        {...field}
                        value={field.value}
                        minValue={1}
                        maxValue={1000}
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmit(form.getValues());
                        }}
                      />
                    </span>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormDescription>
                  {t('maximumLineLengthWhenFormattingCode')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="completion.activate_on_typing"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel className="font-normal">{t('autocomplete')}</FormLabel>
                  <FormControl>
                    <Checkbox
                      data-testid="autocomplete-checkbox"
                      checked={field.value}
                      disabled={field.disabled}
                      onCheckedChange={(checked) => {
                        field.onChange(Boolean(checked));
                      }}
                    />
                  </FormControl>
                </FormItem>
                <FormDescription>
                  {t('whenUncheckedCodeCompletionIsStillAvailableThroughAHotkey')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="keymap.preset"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('keymap')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="keymap-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      disabled={field.disabled}
                      className="inline-flex mr-2"
                    >
                      {KEYMAP_PRESETS.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <div>
                  <Button
                    variant="link"
                    size="xs"
                    className="mb-0 px-0"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      evt.stopPropagation();
                      setKeyboardShortcutsOpen(true);
                    }}
                  >
                    {t('editKeyboardShortcuts')}
                  </Button>
                </div>
              </div>
            )}
          />
        </SettingGroup>
        <SettingGroup title={t('display')}>
          <FormField
            control={form.control}
            name="display.default_width"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('defaultWidth')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="user-config-width-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      disabled={field.disabled}
                      className="inline-flex mr-2"
                    >
                      {APP_WIDTHS.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormDescription>
                  {t('theDefaultAppWidthForNewNotebooks')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="display.theme"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('theme')}</FormLabel>
                <FormControl>
                  <NativeSelect
                    data-testid="theme-select"
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    disabled={field.disabled}
                    className="inline-flex mr-2"
                  >
                    {THEMES.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="display.cell_output"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('cellOutputArea')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="cell-output-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      disabled={field.disabled}
                      className="inline-flex mr-2"
                    >
                      {["above", "below"].map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormDescription>
                  {t('whereToDisplayCellsOutput')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="display.dataframes"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('dataframeViewer')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="display-dataframes-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      disabled={field.disabled}
                      className="inline-flex mr-2"
                    >
                      {["rich", "plain"].map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <FormDescription>
                  {t('whetherToUseMarimosRichDataframeViewer')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="display.code_editor_font_size"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('codeEditorFontSize')}</FormLabel>
                <FormControl>
                  <span className="inline-flex mr-2">
                    <NumberField
                      data-testid="code-editor-font-size-input"
                      className="m-0 w-24"
                      {...field}
                      value={field.value}
                      minValue={8}
                      maxValue={32}
                      onChange={(value) => {
                        field.onChange(value);
                        onSubmit(form.getValues());
                      }}
                    />
                  </span>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </SettingGroup>

        <SettingGroup title={t('packageManagement')}>
          <FormField
            control={form.control}
            disabled={isWasmRuntime}
            name="package_management.manager"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('manager')}</FormLabel>
                <FormControl>
                  <NativeSelect
                    data-testid="package-manager-select"
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    disabled={field.disabled}
                    className="inline-flex mr-2"
                  >
                    {PackageManagerNames.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </SettingGroup>
        <SettingGroup title={t('runtime')}>
          <FormField
            control={form.control}
            name="runtime.auto_instantiate"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel className="font-normal">
                  {t('autorunOnStartup')}
                </FormLabel>
                <FormControl>
                  <Checkbox
                    data-testid="auto-instantiate-checkbox"
                    disabled={field.disabled}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="runtime.on_cell_change"
            render={({ field }) => (
              <div className="flex flex-col gap-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel className="font-normal">{t('onCellChange')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="on-cell-change-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      className="inline-flex mr-2"
                    >
                      {["lazy", "autorun"].map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </FormItem>
                <FormDescription>
                  {t('onCellChangeDescription')}
                </FormDescription>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="runtime.auto_reload"
            render={({ field }) => (
              <div className="flex flex-col gap-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel className="font-normal">
                    {t('onModuleChange')}
                  </FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="auto-reload-select"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      disabled={isWasmRuntime}
                      className="inline-flex mr-2"
                    >
                      {["off", "lazy", "autorun"].map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </FormItem>
                <FormDescription>
                  {t('onModuleChangeDescription')}
                </FormDescription>
              </div>
            )}
          />
        </SettingGroup>
        <SettingGroup title={t('aiAssist')}>
          <p className="text-sm text-muted-secondary">
            {t('addApiKey')} <Kbd className="inline">~/.marimo.toml</Kbd> {t('toActivate')}
            <a
              className="text-link hover:underline"
              href="https://docs.marimo.io/guides/editor_features/ai_completion.html"
              target="_blank"
              rel="noreferrer"
            >
              {t('docs')}
            </a>{" "}
            {t('forMoreInfo')}
          </p>
          <FormField
            control={form.control}
            disabled={isWasmRuntime}
            name="ai.open_ai.base_url"
            render={({ field }) => (
              <FormItem className={formItemClasses}>
                <FormLabel>{t('baseUrl')}</FormLabel>
                <FormControl>
                  <Input
                    data-testid="ai-base-url-input"
                    className="m-0 inline-flex"
                    placeholder="https://api.openai.com/v1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isWasmRuntime}
            name="ai.open_ai.model"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('model')}</FormLabel>
                  <FormControl>
                    <Input
                      data-testid="ai-model-input"
                      className="m-0 inline-flex"
                      placeholder="gpt-4-turbo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormDescription>
                  {t('modelDescription')}
                </FormDescription>
              </div>
            )}
          />
        </SettingGroup>
        <SettingGroup title={t('aiCodeCompletion')}>
          <p className="text-sm text-muted-secondary">
            {t('aiCodeCompletionDescription')}
          </p>

          <FormField
            control={form.control}
            name="completion.copilot"
            render={({ field }) => (
              <div className="flex flex-col space-y-1">
                <FormItem className={formItemClasses}>
                  <FormLabel>{t('provider')}</FormLabel>
                  <FormControl>
                    <NativeSelect
                      data-testid="copilot-select"
                      onChange={(e) => {
                        if (e.target.value === "none") {
                          field.onChange(false);
                        } else {
                          field.onChange(e.target.value);
                        }
                      }}
                      value={
                        field.value === true
                          ? "github"
                          : field.value === false
                            ? "none"
                            : field.value
                      }
                      disabled={field.disabled}
                      className="inline-flex mr-2"
                    >
                      {["none", "github", "codeium"].map((option) => (
                        <option value={option} key={option}>
                          {t(option)}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          {renderCopilotProvider()}
        </SettingGroup>
        <SettingGroup title={t('languageSettings')}>
          <FormLabel>{t('selectLanguage')}</FormLabel>
          <NativeSelect onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </NativeSelect>
        </SettingGroup>
      </form>
    </Form>
  );
};

const SettingGroup = ({
  title,
  children,
}: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-3">
      <SettingSubtitle>{title}</SettingSubtitle>
      {children}
    </div>
  );
};
